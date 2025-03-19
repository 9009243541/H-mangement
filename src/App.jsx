import React from "react";

import { Provider } from "react-redux";
import Store from "./Store";
import Pagroute from "./PageRoute";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <Pagroute />
        <ToastContainer />
      </Provider>
    </div>
  );
};

export default App;
