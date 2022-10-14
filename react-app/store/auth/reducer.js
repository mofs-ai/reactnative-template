import produce from 'immer';

const initialState = {
  principal: undefined,
  state: 'loading',
};
export const auth = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action?.type) {
      case 'initAuth':
        return action?.data || state;
      case 'setPrincipal':
        draft.principal = action?.data;
        draft.state = action?.data ? 'success' : 'fail';
        return draft;
      case 'clearPrincipal':
        draft.principal = undefined;
        draft.state = 'success';
        return draft;
      case 'fail':
        return {...state, state: 'fail'};
      case 'loading':
        return {...state, state: 'loading'};
    }
  });
};
