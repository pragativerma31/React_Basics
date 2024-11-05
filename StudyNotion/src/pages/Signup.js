import React from "react";
import Template from "../components/Template";
import signupimg from "../assets/signup.png";

function SignUp({setIsLoggedIn}) {
  return (
    <Template 
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to fututre-proof your career."
      image={signupimg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    >
    </Template>
  );
}

export default SignUp;