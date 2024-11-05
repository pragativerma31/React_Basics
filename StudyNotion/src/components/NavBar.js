import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {toast} from "react-hot-toast";

function NavBar(props) {
  let IsLoggedin = props.IsLoggedin;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex justify-evenly items-center py-4 bg-richblack-900 ">
      <div className="flex items-center">
        <Link to="/" className="mr-2">
          <img src={logo} alt="logo" className="w-[8] h-[8]" />
        </Link>
      </div>
      <div className="flex items-center ">
        <Link to="/" className="text-richblack-100 hover:text-white hover:font-semibold transition duration-300 ease-in-out mx-4">
          Home
        </Link>
        <Link to="/about" className="text-richblack-100 hover:text-white hover:font-semibold transition duration-300 ease-in-out mx-4">
          About
        </Link>
        <Link to="/contact" className="text-richblack-100 hover:text-white hover:font-semibold transition duration-300 ease-in-out mx-4">
          Contact
        </Link>
      </div>
      <div className="flex items-center">
        {!IsLoggedin && (
          <>
            <Link to="/login">
              <button className="bg-richblack-800 text-richblack-100 hover:bg-[#2E354D] text-[14px]  font-semibold py-1 px-3 rounded mx-2">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-richblack-800 text-richblack-100 hover:bg-[#2E354D] text-[14px]  font-semibold py-1 px-3 rounded mx-2">
                Sign Up
              </button>
            </Link>
          </>
        )}
        {IsLoggedin && (
          <>
            <Link to="/">
              <button onClick={() =>{setIsLoggedin(false) ; toast.success("logged out")}} className="bg-richblack-800 text-richblack-100 hover:bg-[#2E354D] text-[14px]  font-semibold py-1 px-3 rounded mx-2">
                Log Out
              </button>
            </Link>
            <Link to="/Dashboard">
              <button className="bg-richblack-800 text-richblack-100 hover:bg-[#2E354D] text-[14px]  font-semibold py-1 px-3 rounded mx-2">
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
