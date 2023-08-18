interface IAppState {
    isLoggedIn: boolean;
    updateAuthStatus: Function;
}

import * as React from 'react';
import { useSelector } from 'react-redux';
import _ from '../utils/lodash';

const appContext = React.createContext({} as IAppState);
const AppProvider = appContext.Provider;
const AppConsumer = appContext.Consumer;

const AppStateProvider = (props:any) => {

    const hasUserLoggedIn = useSelector((state: any) => state.App.loginUserDetails || false);
    const [isAuthenticated, updateAuthStatus] = React.useState(hasUserLoggedIn && hasUserLoggedIn ? true : false);

    return (
        <AppProvider
            value={{
                isLoggedIn: isAuthenticated,
                updateAuthStatus
            }}>
            {props.children}
        </AppProvider>
    );
};

export { appContext, AppStateProvider, AppConsumer };
