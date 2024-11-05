import LoginForm from "./LoginForm";
import frame from "../assets/frame.png";
import SignUpForm from "./signUpForm"
import googleimg from "../assets/google.png";

function Template({title , desc1 , desc2 , image , formtype ,setIsLoggedIn}){
    return(
        <div className= "  flex justify-between items-center w-[900px] ml-[320px] h-[350px] mt-[50px]">
            <div className="w-[700px] h-[100%]" >
                <h1 className='text-richblack-5 font-semibold text-[1.5rem] leading-[2.375rem]' >{title}</h1>
                <p className='text-[0.8rem] leading[1.625rem] mt-1'>
                    <span className='text-richblack-100'>{desc1}</span><br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
                {
                    formtype==="signup"?
                    <SignUpForm setIsLoggedIn={setIsLoggedIn}></SignUpForm> :
                    <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
                }
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className={ formtype==="login" ? `w-[155px] h-[1px] bg-richblack-700` :`w-[230px] h-[1px] bg-richblack-700` }></div>
                    <span className='text-richblack-700 font-medium leading[1.375rem]'>OR</span>
                    <div className={ formtype==="login" ? `w-[155px] h-[1px] bg-richblack-700` :`w-[230px] h-[1px] bg-richblack-700` }></div>
                </div>

                <button className={ formtype==="login" ? `w-[350px] flex justify-center items-center rounded-[0.3rem] font-medium text-richblack-100 border border-richblack-700 px-[8px] py-[4px] gap-x-2 mt-4 ` : `w-[500px] flex justify-center items-center rounded-[0.3rem] font-medium text-richblack-100 border border-richblack-700 px-[8px] py-[4px] gap-x-2 mt-4 `}>
                    <img className="w-[13px] pt-[3px] " src={googleimg} alt="Google" ></img>
                    <span className="text-[16px]">Sign in with Google</span>
                </button>
                
            </div>
            <div className= {formtype==="login" ? ` w-[450px] h-[100%] relative mt-[100px]` : ` w-[450px] h-[100%] relative mt-[150px]`}>
                <img className="w-[350px] " src={frame} alt="Frame"  loading="lazy"></img>
                <img  className="absolute -top-4 left-4 w-[350px] " src={image} alt="students" ></img>
            </div>
        </div>
    )
}
export default Template;