import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.js";
import { store } from "./redux/store.js";
import ToastContainer from "rsuite/esm/toaster/ToastContainer.js";
/* import { ToastContainer, toast } from "react-toastify"; */
/* import 'react-toastify/dist/ReactToastify.css'; */

const container = document.getElementById("konrix");
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}
