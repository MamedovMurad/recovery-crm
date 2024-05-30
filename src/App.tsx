import React, { useEffect } from "react";

import AllRoutes from "./routes/Routes";

/* import { configureFakeBackend } from "./helpers"; */

import "nouislider/distribute/nouislider.css";

import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";
import { ToastContainer } from "react-toastify";
import { getMe } from "./helpers/api/user";
import { useDispatch } from "react-redux";
import { AuthActionTypes } from "./redux/auth/constants";
import {useSelector} from "react-redux";
import { authApiResponseSuccess } from "./redux/actions";
// configure fake backend
/* configureFakeBackend(); */

const App = () => {
  const dispatch = useDispatch()
useEffect(() => {
if (localStorage.getItem('agent')) {
  getMe().then((data)=>{
    dispatch( authApiResponseSuccess(AuthActionTypes.LOGIN_USER, data?.data))
   })
}
}, [localStorage.getItem('agent')]);



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
