import React from "react";

import AllRoutes from "./routes/Routes";

/* import { configureFakeBackend } from "./helpers"; */

import "nouislider/distribute/nouislider.css";

import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";
import { ToastContainer } from "react-toastify";

// configure fake backend
/* configureFakeBackend(); */

const App = () => {
 console.log( localStorage.getItem('agent'),'lll');
 
  return (
    <>
      <React.Fragment>
        <AllRoutes />
        <ToastContainer />
      </React.Fragment>
    </>
  );
};

export default App;
