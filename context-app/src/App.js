import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagesinfo from "./components/Pagesinfo"
import React, { useContext } from "react"
import './App.css' 
import { AppContext } from "./content/Appcontext"
import { useEffect } from "react"
import { Routes , Route } from "react-router-dom"

export default function App() {
  const {FetchData} = useContext(AppContext);
  const {page} = useContext(AppContext);

  useEffect(() =>{
    FetchData();
  },[page])

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center ">
      <Header></Header>
      <Blogs></Blogs>
      <Pagesinfo></Pagesinfo>
    </div>
  )
}
