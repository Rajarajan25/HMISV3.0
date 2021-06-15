
import React from "react";
import { ApolloProvider } from '@apollo/client';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import axios from "axios";
import * as _redux from "./redux";
import store, { persistor } from "./redux/store";
import App from "./app/App";
import client from './apolloClient.js';
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
// Datepicker
import "react-datepicker/dist/react-datepicker.css";
import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider
} from "./_metronic/layout";
import { MetronicI18nProvider } from "./_metronic/i18n";
import {ErrorBoundary} from "react-error-boundary"


/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock = */ //_redux.mockAxios(axios);

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store);



// const app = new Realm.App(APP_ID);


// async function getValidAccessToken() {
//   if (!app.currentUser) {
//     await app.logIn(Realm.Credentials.anonymous());
//   } else {
//     await app.currentUser.refreshCustomData();
//   }

//   const { accessToken } = app.currentUser;
//   return accessToken
// }

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: graphql_url,
//     fetch: async (uri, options) => {
//       const accessToken = await getValidAccessToken();
//       options.headers.Authorization = `Bearer ${accessToken}`;
//       return fetch(uri, options);
//     },
//   }),
//   cache: new InMemoryCache()
// });
console.log("PUBLIC_URL-->", PUBLIC_URL);
ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <MetronicI18nProvider>
      <MetronicLayoutProvider>
        <MetronicSubheaderProvider>
          <ApolloProvider client={client}>
            <MetronicSplashScreenProvider>
              <App store={store} persistor={persistor} basename={PUBLIC_URL} />
            </MetronicSplashScreenProvider>
          </ApolloProvider>
        </MetronicSubheaderProvider>
      </MetronicLayoutProvider>
    </MetronicI18nProvider> 
    </ErrorBoundary>,
  document.getElementById("root")
);

function ErrorFallback({error, componentStack, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrongs:</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
