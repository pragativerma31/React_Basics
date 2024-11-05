import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm({setIsLoggedIn}) {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const[showPassword , setshowPassword] =useState(false);
    const navigate = useNavigate();

    function loginHandler(event) {
        const { name, value } = event.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    function ShowPasswordHandler(){
        setshowPassword(!showPassword);
    }
    function SigninHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        navigate("/Dashboard");
        toast.success("Logged In");
    }

    return (
        <form  className=" flex flex-col w-[350px] mt-4" onSubmit={SigninHandler}>
            <div className=' w-[350px]'>
                <span className='text-[0.65rem] text-richblack-5  leading-[1.375rem]'>Email Address <sup className="text-red-500">*</sup></span>
                <input
                    name="email"
                    value={loginData.email}
                    type="email"
                    placeholder="Enter email address"
                    onChange={loginHandler}
                    className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full  p-[6px]'
                />
            </div>

            <div className='w-[350px] relative mt-3'>
                <span className='text-[0.65rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className="text-red-500">*</sup></span>
                <input
                    name="password"
                    value={loginData.password}
                    type={showPassword ? `text` : `password`}
                    placeholder="Enter password"
                    onChange={loginHandler}
                    className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full p-[6px]'
                />
                <span  className='absolute right-3 top-[30px] cursor-pointer' onClick={ShowPasswordHandler}>
                    {
                        showPassword? <FontAwesomeIcon icon={faEye} size="xs" style={{color: "#ffffff"}} /> : <FontAwesomeIcon icon={faEyeSlash} size="xs" style={{color: "#ffffff"}}  />
                    }
                </span>
                <Link to="/forgotPassword">
                    <span className='text-[10px]  text-blue-100 max-w-max ml-[275px]'>Forgot Password </span>
                </Link>
            </div>
            <button className='bg-yellow-50 rounded-[0.3rem] font-medium text-richblack-900 px-[8px] py-[4px] mt-6 w-[350px]'>Sign In</button>
        </form>
    );
}

export default LoginForm;



