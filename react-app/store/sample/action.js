//import {setToken} from '#apis';

export const getSampleInfo = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: 'getSampleInfo', data: undefined});
      // add to modify the business logic
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

export const setSampleInfo = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({type: 'setSampleInfo', data: String(params).trim()});
      // add to modify the business logic
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
