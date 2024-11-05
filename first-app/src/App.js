import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount] = useState(0);

  function decreaseHandler(){
      setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (

    <div className="w-[100%] h-[100vh] flex justify-center items-center flex-col gap-4  bg-[#344151]" >
      <div className="text-[#0893d4]">INCREMENT AND DECREMENT</div>
      <div className=" w-[8%] h-[5%] flex justify-around items-center bg-[#ffffff] text-[20px]" >
        <div className="w-[30%] h-[80%]">
          <button onClick={decreaseHandler} className=" w-[100%] h-[100%] font-bold border-r-2 ">-</button>
        </div>
        <div className="w-[30%] h-[80%] flex justify-center items-center">
          {count}
        </div>
        <div className="w-[30%] h-[80%]">
          <button onClick={increaseHandler} className=" w-[100%] h-[100%] font-bold border-l-2">+</button>
        </div>
      </div>
      <div className="w-[5%] h-[4%] bg-[#0893d4] flex justify-center items-center text-white"><button onClick={resetHandler}>RESET</button></div>
    </div>
  );
}

export default App;
