import { combineReducers } from 'redux';
import App from './app_reducer';
import Toast from './toast_reducer';

const Reducer = combineReducers({
  App: App,
  Toast: Toast,
});

const rootReducer = (state:any, action:any) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'SIGN_OUT') {
    state = undefined;
  }

  return Reducer(state, action);
};

export default rootReducer;
