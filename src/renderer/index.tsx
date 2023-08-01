// import React from "react";
// import {createRoot} from "react-dom/client";
// import { render } from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../../assets/styles/base.scss';
// import App from './app';
// import Login from './components/login/login';
// import { initReduxStore, persistor, store } from './store/index';
// const { Provider } = require('react-redux');
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import Loader from './components/common/loader';
// import Toast from './components/common/toast';
// import { AppConsumer, AppStateProvider } from './providers/index';

// initReduxStore((err: any, state: any) => {
//   if (!err) {
//     renderApp();
//   }
// });

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement!);


// export function renderApp() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter>
//           <Loader />
//           <Toast />
//           <Routes>
//             <AppStateProvider>
//               <AppConsumer>
//                 {
//                   (context) => {
//                     return context.isLoggedIn && !(location.pathname && location.pathname.includes('/lab-registration/login')) ? <App /> :
//                       <Routes>
//                               <Route path="/login" element={<Login/>} />

//                         {/* {<Route exact path={'/:id'} component={NotFoundPage} />} */}
//                       </Routes>;
//                   }
//                 }
//               </AppConsumer>
//             </AppStateProvider>
//           </Routes>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   );
// }

// root.render(renderApp());


import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App/>);
