/*
// action usage

1. import 
import {getAuthInfo} from 'reducer/auth/action';

2. call method 

  case 1 :  init 
  React.useEffect(() => {
    dispatch(getCountryCode());
    dispatch(getRegionCode());
    dispatch(getSexCode());
    dispatch(getAdSCode());
    dispatch(getCmCode());
    dispatch(getCouponCode());
    dispatch(getMemberCode());
    dispatch(getMainSurgeryCode());
    dispatch(getSubSurgeryCode_1());
    dispatch(getSubSurgeryCode_2());
    dispatch(getSubSurgeryCode_3());
    dispatch(treatmentDetailTag());
  }, []);

  case 2: action
  await dispatch(getAuthInfo()).then(
    (v: {type?: string; data?: object}) => {
      if (v?.type === 'fail') {
      }
    },
  );
*/
import {setToken} from '#apis';

export const getAuthInfo = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: 'loading', data: undefined});
      /*
      restApi.post().
        .then(response => {
          if (response) {
            dispatch({type: 'setPrincipal', data: response});
            resolve(response);
          } else {
            dispatch({type: 'fail', data: undefined});
            resolve({type: 'fail', data: undefined});
          }
        })
        .catch(e => {
          dispatch({type: 'fail', data: e});
          reject(e);
        });
				*/
    });
  };
};

export const clear = () => {
  setToken(undefined, undefined);
  return dispatch => dispatch({type: 'clearPrincipal'});
};
