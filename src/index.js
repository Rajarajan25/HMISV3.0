
import React from "react";
import { render } from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import axios from "axios";
import * as _redux from "./redux";
import store, { persistor } from "./redux/store";
import App from "./app/App";
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
// Datepicker
import "react-datepicker/dist/react-datepicker.css";
import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider
} from "./_metronic/layout";
import {MetronicI18nProvider} from "./_metronic/i18n";
import * as Realm from "realm-web";

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
/* const mock = */ _redux.mockAxios(axios);

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store);

export const APP_ID = "application-0-qrsog";

const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

const app = new Realm.App(APP_ID);

async function getValidAccessToken() {
  if (!app.currentUser) {
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    await app.currentUser.refreshCustomData();
  }
 
  const { accessToken } = app.currentUser;
  return accessToken
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphql_url,
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <MetronicI18nProvider>
    <MetronicLayoutProvider>
      <MetronicSubheaderProvider>
        <MetronicSplashScreenProvider>
          <App store={store} client={client} persistor={persistor} basename={PUBLIC_URL} />
        </MetronicSplashScreenProvider>
      </MetronicSubheaderProvider>
    </MetronicLayoutProvider>
  </MetronicI18nProvider>,
  document.getElementById("root")
);
