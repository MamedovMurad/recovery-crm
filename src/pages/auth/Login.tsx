import { useEffect, useState } from "react";
import { Navigate, Link, useLocation,useNavigate} from "react-router-dom";

// form validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser, resetAuth } from "../../redux/actions";

// components
import {
  VerticalForm,
  FormInput,
  AuthLayout,
  PageBreadcrumb,
} from "../../components";
import { loginAdmin } from "../../helpers/api/auth";
import { toast } from "react-toastify";

interface UserData {
  email: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  return (
    <p className="text-gray-500 dark:text-gray-400 text-center">
      Don't have an account ?
      <Link to="/auth/register" className="text-primary ms-1">
        <b>Register</b>
      </Link>
    </p>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setloading]= useState(false)
  // const dispatch = useDispatch<AppDispatch>();

  // const { user, userLoggedIn, loading } = useSelector((state: RootState) => ({
  //   user: state.Auth.user,
  //   loading: state.Auth.loading,
  //   error: state.Auth.error,
  //   userLoggedIn: state.Auth.userLoggedIn,
  // }));

  // useEffect(() => {
  //   dispatch(resetAuth());
  // }, [dispatch]);

  /*
  form validation schema
  */
  // const schemaResolver = yupResolver(
  //   yup.object().shape({
  //     email: yup.string().required("Please enter Username"),
  //     password: yup.string().required("Please enter Password"),
  //   })
  // );

  /*
  handle form submissionnewTask
  */
  const onSubmit = async(formData: UserData) => {
  
    
    setloading(true)
loginAdmin(formData).then((data:any)=>{
  localStorage.setItem('agent',data?.data?.token)
  toast.success('You are logging in')



}).then(()=>{
window.location.replace(window.location.origin+'/')

})

  };



  // redirection back to where user got redirected from
  const redirectUrl = location?.search?.slice(6) || "/";


  return (
    <>
  
      <PageBreadcrumb title="Login" />
      <AuthLayout
        authTitle="Sign In"
        helpText="Enter your email address and password to access admin panel."
   
  
      >
        <VerticalForm<UserData> onSubmit={onSubmit} >
          <FormInput
            label="Email Address"
            type="text"
            name="email"
            placeholder="Enter your email"
            containerClass="mb-4"
            className="form-input"
            labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            containerClass="mb-4"
            className="form-input"
            labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
            required
          />


          <div className="flex justify-center mb-6">
            <button
              className="btn w-full text-white bg-primary"
              type="submit"
              
            >
              Log In
            </button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Login;
