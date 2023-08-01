import user_actions from '../actions/userActions';

import _ from './../utils/lodash';

export interface IAppState {
    showLoader?: boolean;
    activeHTTPRequests: number;
    configDetails?: any;
    loginUserDetails?: any;
    isSideMenuOpen?: boolean;
    isOpenAlertModel?: boolean;
    activeSideBar?: any;
    isOpenSuccessModel?: boolean;
    isOpenSubscriptionDetailsModel?: boolean;
}

const initialState: IAppState = {
    showLoader: false,
    activeHTTPRequests: 0,
    configDetails: undefined,
    loginUserDetails: undefined,
    isSideMenuOpen: false,
    isOpenAlertModel: false,
    activeSideBar: 0,
    isOpenSuccessModel: false,
};

const App = (state: IAppState = initialState, action: any) => {
    switch (action.type) {
        case 'persist/REHYDRATE': {
            if (action.payload) {
                // just patch to fix the menu highlight option for prod release
                // next, we need to change the menu structure
                action.payload.App.activeHTTPRequests = 0;
                return _.extend({}, state, action.payload.App,
                    {
                        showLoader: false,
                        isOpenSuccessModel: false,
                        isOpenDcpBurnModel: false,
                        isOpenDcpConflictModel: false,
                        isOpenDuplicateTestModel: false,
                        isOpenSubscriptionDetailsModel: false
                    });
            } else {
                return _.extend({}, state, { showLoader: false, isOpenSuccessModel: false });
            }
        }
        case user_actions.Constants.SHOW_LOADER:
            return _.extend({}, state, { activeHTTPRequests: state.activeHTTPRequests + 1 });

        case user_actions.Constants.HIDE_LOADER:
            return _.extend({}, state, { activeHTTPRequests: state.activeHTTPRequests > 0 ? state.activeHTTPRequests - 1 : 0 });
        case user_actions.Constants.LOGIN_DETAILS: {
            return _.extend({}, state, { loginUserDetails: action.payload });
        }
       
        case user_actions.Constants.CONFIG_DETAILS: {
            return _.extend({}, state, { configDetails: action.payload });
        }
      
        case user_actions.Constants.UPDATE_AUTH_TOKEN: {
            let loggedInUserToken = { ...state.loginUserDetails };
            loggedInUserToken.token = action.payload;
            return _.extend({}, state, { loginUserDetails: loggedInUserToken });
        }
        case user_actions.Constants.SIGN_OUT: {
            return _.extend({}, state, { ...initialState });
        }
        case user_actions.Constants.IS_SIDE_MENU_OPEN: {
            return _.extend({}, state, { isSideMenuOpen: action.payload });
        }
        case user_actions.Constants.IS_OPEN_ALERT_MODEL: {
            return _.extend({}, state, { isOpenAlertModel: action.payload });
        }
        case user_actions.Constants.ACTIVE_SIDEBAR: {
            return _.extend({}, state, { activeSideBar: action.payload });
        }
       
        case user_actions.Constants.IS_OPEN_SUCCESS_MODEL: {
            return _.extend({}, state, { isOpenSuccessModel: action.payload });
        }
      
        default:
            return state;
    }
};

export default App;
