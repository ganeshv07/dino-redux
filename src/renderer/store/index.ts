import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { logger } from '../utils/logger';
import promiseMiddleware from './../middleware/promise-middleware';
import Reducer from './../reducers/index';
import immutableToJS from './../utils/immutable-to-js';

declare const __DEV__: boolean; // from webpack

const persistConfig = {
    key: 'root',
    storage,
    timeout: undefined
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const reduxLogger = createLogger({
    //need to understand this logger middleware
    collapsed: true,
    stateTransformer: (state: any) => {
        return immutableToJS(state);
    }
});

export const store = configureStore({});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;


function configureStore(initialState: any) {
    const _store = createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(..._getMiddleWare())
        )
    );

    _enableHotLoader(_store);
    return _store;
}

function _getMiddleWare(): Middleware[] {
    let middleware = [
        promiseMiddleware, //don't know why using custom promise middleware when we have npm
        thunk
    ];
    if (__DEV__) {
        middleware = [...middleware, reduxLogger];
    }
    return middleware;
}

function _enableHotLoader(_store: any) {
    if (!__DEV__) {
        return;
    }
    const { hot } = module as any;
    if (hot) {
        //understand this one
        hot.accept('./../reducers', () => {
            const nextRootReducer = require('./../reducers');
            _store.replaceReducer(nextRootReducer);
        });
    }
}
export function initReduxStore(cb:any) {
    persistStore(store, null);
}

// Listen to store changes and wanr user if offline storage is used above 4 MB
// After JSON stringify each char in string will occupy 1 byte space. Verified by exporing complete store to json file
store.subscribe(function () {
    // retrieve latest store state here
    // Ex:
    try {
        let storeSize = (JSON.stringify(store.getState()).length / 1000000);
        if (storeSize > 4) {
            // utility.alert({ message: 'Low offline storage space. Please go online to free space.' });
            logger.debug(`Store size is ${storeSize} Mega Bytes`, storeSize);
        }
        //  logger.info(`Store size is ${storeSize} Mega Bytes`, storeSize);
    } catch (e) {
        // Exception occurs when circular reference is present in store.
        //  utility.alert({ message: 'Very low offline storage space. Please go online to free space.' });
    }
});
