import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initReduxStore, persistor, store } from './store/index';
const { Provider } = require('react-redux');
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppConsumer, AppStateProvider } from './providers/index';
import Login from './components/login/login';
import App from "./app";

initReduxStore((err: any, state: any) => {
    if (!err) {
      renderApp();
    }
  });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
export function renderApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <AppStateProvider>
          <AppConsumer>
               { (context) => {
                    {console.log('context',context)} return !context.isLoggedIn  ? 
                   <App /> 
                   :
                    <Routes>
                              <Route path="/" element={<Login/>} />
                    </Routes>;
                }
              }
              </AppConsumer>
            </AppStateProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
root.render(renderApp());

