import React, { useState } from "react";
import { useEffect } from "react";
import CardsBox from "./components/CardsBox";
import { filterData } from "./data";
import { apiUrl } from "./data";
import "./index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [courses , setcourses] = useState(null);
  const [loading , setLoading ] =useState(true);

  // The useEffect here is responsible for fetching data from an API when the component is first mounted (on load).
  useEffect( () => {
    const Fetchdata = async() => {
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const responseJson = await response.json();
        setcourses(responseJson.data);
      }
      catch(error){
        console.log("Something went wrong");
      }
      // Executes the following code regardless of success or failure in the try block.
      finally{
        setLoading(false);
      }
    }
    Fetchdata();
  },[])
  
  return(
    <div className="body">
      <h1>Top Courses</h1>
      <div className="cards-box">
        {/* {
          loading? (<LoadingSpinner></LoadingSpinner>) : (<CardsBox options = {filterData} courses ={ courses} ></CardsBox>)
        } */}
        <CardsBox options = {filterData} courses ={ courses} loading={loading} setLoading = {setLoading}></CardsBox>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  ); 
};

export default App;
