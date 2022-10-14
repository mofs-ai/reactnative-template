import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//----------------------------------------------------------------------------------------------------
// reducer
import {auth} from '#store/auth/reducer';
import {sample} from '#store/sample/reducer';
//----------------------------------------------------------------------------------------------------

export default createStore(
  combineReducers({
    auth,
    sample,
  }),
  applyMiddleware(thunk),
);
