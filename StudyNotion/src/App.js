import { Route,Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import DashBoard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/about";
import Contact from "./pages/contact";
import { useState } from "react";

function App() {
  const[IsLoggedin , setIsLoggedin] =useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-x-hidden ">
      <NavBar IsLoggedin={IsLoggedin} setIsLoggedin ={setIsLoggedin}></NavBar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>} ></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedin}></Login>}></Route>
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedin}></SignUp>}></Route>
          <Route path="/Dashboard" element={<DashBoard></DashBoard>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App;
