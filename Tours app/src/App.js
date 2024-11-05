import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";
import RefreshButton from "./components/refreshButton";
import "./index.css";

const App = () => {
  const [tours , setTours] = useState(data);

  function RefreshHandler(){
    setTours(data);
  }

  function ShowRefresh( tours ){
    if(Array.isArray(tours) && tours.length === 0){
      return <RefreshButton RefreshHandler = {RefreshHandler}></RefreshButton>
    }
    return null ;
  }

  function RemoveTour(id){
    const NewTours = tours.filter((tour) => tour.id !== id)
    
    setTours(NewTours);
  }
  

  return (
    <div className="body" >
      {/* When you pass a value to a child component, you need to specify a name for that prop. */}
      {/* If you simply wrote <Tours tours>, it wouldn’t convey any value and React wouldn't understand what tours refers to—it would just treat tours as a boolean prop, implying it’s true. */}
      <Tours tours = {tours} RemoveTour ={RemoveTour} ShowRefresh ={ShowRefresh}></Tours>
      {ShowRefresh(tours)}
    </div>
  );
};

export default App;
