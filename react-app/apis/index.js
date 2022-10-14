/*
axios : https://github.com/axios/axios

<error> 
2022-04-27 : 0.27.2 ==upgrade==> Pre-release v1.0.0-alpha.1  ::2022-05-30
https://github.com/axios/axios/issues/4998

stable current 0.27.2
*/
import axios from 'axios';
import {setStorage, getStorage} from '#utils/rn.async.storage';
import day2js from '#utils/tz.dayjs';
//----------------------------------------------------------------------------------------------------
export const TOKEN_SAVE_NAME = 'app_token_data';

export const getAPIHost = () => {
  return __DEV__ ? 'http://127.0.0.1:7101/v1' : 'https://~~~~~~~/v1';
};

export const authApi = axios.create({
  baseURL: getAPIHost(),
  auth: {
    username: '',
    password: '',
  },
});

export const restApi = axios.create({
  baseURL: getAPIHost(),
});

export const httpClient = axios;

export const setToken = (cookies, setCookie) => {
  if (!cookies || !cookies?.access_token) {
    setStorage(TOKEN_SAVE_NAME, '');
    return '';
  }

  if (setCookie) {
    setCookie(TOKEN_SAVE_NAME, JSON.stringify({...cookies}));
  }

  const {access_token, refresh_token, expired_at} = cookies;
  if (access_token) {
    // const now = day2js().unix() - 1;
    const store_data = {
      access_token,
      refresh_token,
      expired_at: expired_at,
    };
    setStorage(TOKEN_SAVE_NAME, JSON.stringify(store_data));

    return store_data;
  } else {
    delete restApi.defaults.headers.common.authorization;
    if (setCookie) {
      setCookie(TOKEN_SAVE_NAME, '');
    }
  }
};
// ======================================================================================================================
// request : client -> server
restApi.interceptors.request.use(async request => {
  // /auth/token 예외 : signin ,signup
  const requestUrl = String(request?.url || '').trim();
  if (requestUrl.match(/(\/signin|\/signup)/i)) {
    return request;
  }
  let token = {};
  await getStorage(TOKEN_SAVE_NAME).then(res => {
    if (res) {
      token = JSON.parse(res);
    }
  });
  if (token?.access_token) {
    let access_token = String(token.access_token).trim();
    // 서버에서 오는 expired_at  = unix time ==> 실제 날짜 구하려면 1000을 곱해야함
    const expired_at = token.expired_at;
    const timeGap = expired_at - day2js().utc().unix();
    // access_token , refresh_token갱신 로직
    // 30초 이내 -> access_token갱신
    if (timeGap < 30) {
      // headers 변수 초기화
      const headers = {
        authorization: `Bearer ${token.access_token}`,
      };
      //Refresh Token Apply = 만료시간이 10초 남은경우- 만료로 판정
      if (timeGap < 10) {
        headers.refresh_token = `${token.refresh_token}`;
      }
      //token 갱신 -- recursive 방지를 위해서 새로운 axios를 사용해서 연결
      const {data} = await axios
        .create({
          baseURL: getAPIHost(),
        })
        .get('/auth/token', {
          headers,
        });
      access_token = data?.access_token || token.access_token;
      const newToken = {
        access_token,
        refresh_token: data?.refresh_token || token.refresh_token,
        expired_at: data?.expired_at || token.expired_at,
      };
      await setToken(newToken, null);
    }
    request.headers.common.authorization = `Bearer ${access_token}`;
  }
  return request;
});

// ======================================================================================================================
// response 처리
// response : client <- server
/*
restApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
*/
// ======================================================================================================================

// export const getStockAPIHost = 'http://127.0.0.1:3000/';

// export let stockApi = axios.create({
//   baseURL: getStockAPIHost + 'api',
// });

export default {
  getAPIHost,
  restApi,
  authApi,
  setToken,
};
