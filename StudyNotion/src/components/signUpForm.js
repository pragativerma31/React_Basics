import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignUpForm({setIsLoggedIn}){
    const [signupData, setsignupData] = useState({ 
        email: "", 
        Password: "" ,
        firstname:"" ,
        lastname: "" ,
        confirmpass:"",
    });

    const navigate = useNavigate();
    const[showPassword , setshowPassword] =useState(false);
    const[showConfirmPassword , setshowConfirmPassword] =useState(false);
    const [accountType, setAccountType] = useState("student");

    function signUpHandler(event) {
        const { name, value } = event.target;
        setsignupData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    function ShowPasswordHandler(){
        setshowPassword(!showPassword);
    }

    function ShowConfirmPasswordHandler(){
        setshowConfirmPassword(!showConfirmPassword);
    }

    function createaccountHandler(event){
        event.preventDefault();
        if(signupData.Password !== signupData.confirmpass){
            toast.error("Password Doesnt Match");
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account Created");
            navigate("/Dashboard");
        }
    }

    return(
        <div>
            <div className=' w-[175px] flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full '>
                <button className={`${accountType === "student" ? "bg-richblack-900 font-semibold text-richblack-5 text-[0.65rem]":"bg-transparent font-semibold text-[0.65rem] text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900 font-semibold text-richblack-5 text-[0.65rem]" :"bg-transparent  font-semibold text-[0.65rem] text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>
            <form onSubmit={createaccountHandler}>
                <div className=' w-[500px] flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <span className='text-[0.65rem] text-richblack-5  leading-[1.375rem]'>First Name <sup>*</sup></span>
                        <input
                           required
                           name="firstname"
                           value={signupData.firstname}
                           type="text"
                           placeholder="First Name"
                           onChange={signUpHandler}
                           className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full  p-[6px]'
                        />
                    </label>
                    <label className='w-full'>
                        <span className='text-[0.65rem] text-richblack-5  leading-[1.375rem]'>Last Name <sup>*</sup></span>
                        <input
                          required
                          name="lastname"
                          value={signupData.lastname}
                          type="text"
                          placeholder="Last Name"
                          onChange={signUpHandler}
                          className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full  p-[6px]'
                        />
                    </label>
                </div>
                <div className='w-[500px] mt-[10px]'>
                    <label className='w-full '>
                        <span className='text-[0.65rem] text-richblack-5  leading-[1.375rem]'>Email Address <sup>*</sup></span>
                        <input
                          required
                          name="email"
                          value={signupData.email}
                          type="email"
                          placeholder="Enter email address"
                          onChange={signUpHandler}
                          className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full  p-[6px]'
                        />
                    </label>
                </div>

                <div className='w-[500px] flex gap-x-4 mt-[10px]'>
                    <label className='w-full relative'>
                        <span className='text-[0.65rem] text-richblack-5  leading-[1.375rem]'>Password <sup>*</sup></span>
                        <input
                          required
                          name="Password"
                          value={signupData.Password}
                          type={showPassword ? `text` : `password`}
                          placeholder="Enter password"
                          onChange={signUpHandler}
                          className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full  p-[6px]'
                        />
                        <span className='absolute right-3 top-[30px] cursor-pointer'  onClick={ShowPasswordHandler}>
                            {
                               showPassword? <FontAwesomeIcon icon={faEye} size="xs" style={{color: "#ffffff"}} /> : <FontAwesomeIcon icon={faEyeSlash}  size="xs" style={{color: "#ffffff"}} />
                            }
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <span className='text-[0.65rem] text-richblack-5  leading-[1.375rem]'> Confirm Password <sup>*</sup></span>
                        <input
                          required
                          name="confirmpass"
                          value={signupData.confirmpass}
                          type={showConfirmPassword ? `text` : `password`}
                          placeholder="Enter password"
                          onChange={signUpHandler}
                         className='bg-richblack-800 rounded-[0.3rem] text-richblack-5 text-[0.9rem] w-full  p-[6px]'
                        />
                        <span className='absolute right-3 top-[30px] cursor-pointer' onClick={ShowConfirmPasswordHandler}>
                            {
                               showConfirmPassword? <FontAwesomeIcon icon={faEye} size="xs" style={{color: "#ffffff"}} /> : <FontAwesomeIcon icon={faEyeSlash} size="xs" style={{color: "#ffffff"}} />
                            }
                        </span>
                    </label>
                </div>
            
                <button className='bg-yellow-50 rounded-[0.3rem] font-medium text-richblack-900 px-[8px] py-[4px] mt-6 w-[500px]'>Create Account</button>
            </form>
        </div>
    )
}
export default SignUpForm;