import produce from 'immer';

const initialState = {
  state: 'loading',
  name: '홍길동',
};

export const sample = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action?.type) {
      case 'init':
        return action?.data || state;
      case 'getSampleInfo':
        draft.state = action?.data ? 'success' : 'fail';
        return draft;
      case 'setSampleInfo':
        draft.name = String(action?.data || '');
        return draft;
      case 'fail':
        return {...state, state: 'fail'};
    }
  });
};
