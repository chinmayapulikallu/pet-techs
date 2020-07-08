import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
//------------------Styling-----------------------------
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//------------------Styling-----------------------------

import rootReducer from "./redux/reducers"; // imports ./redux/reducers/index.js
import rootSaga from "./redux/sagas"; // imports ./redux/sagas/index.js

import App from "./components/App/App";

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
  composeEnhancers(applyMiddleware(...middlewareList))
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Quicksand"', "sans-serif"].join(","),
  },
  palette: {
    primary: { main: "#F8E16C" }, //yellow
    secondary: { main: "#195C60" }, //green
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("react-root")
);
