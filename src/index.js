import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";


import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./redux/reducers";
// import { composeWithDevTools } from "redux-devtools-extension";

import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App />
    </Router>
    </PersistGate>
  </Provider>,
  rootElement
);
