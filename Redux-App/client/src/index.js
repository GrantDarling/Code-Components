import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import App from "./App";
import loadingReducer from "./reducers/isLoading";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  isLoading: loadingReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
        applyMiddleware(thunk)
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
