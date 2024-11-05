import React from "react";
import Template from "../components/Template";
import  loginimg  from "../assets/login.png";

function Login({setIsLoggedIn}) {
  return (
    <Template 
      title="Welcome Back"
      desc1="Build skills for today , tomorrow and beyond."
      desc2="Education to fututre-proof your career."
      image={loginimg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    >
    </Template>
  );
}

export default Login;


