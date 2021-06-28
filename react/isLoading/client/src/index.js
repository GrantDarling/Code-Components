import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from './store'

import Loader from './components/Loader'

render(
  <Provider store={store}>
		<Loader>
    	<App />
		</Loader>
  </Provider>,
  document.getElementById("root")
);
