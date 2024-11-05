import { useContext } from "react"
import { AppContext } from "../content/Appcontext"

export default function Previous(){
    const{setpage} = useContext(AppContext);
    const{page} = useContext(AppContext);


    function PrevHandler(){
        setpage(page-1);
    }
    return(
        <div onClick={PrevHandler} className=" w-[90px] bg-transparent h-[30px] flex justify-center items-center  hover:bg-blue-500 rounded  text-black  hover:text-white font-semibold  ">
            <button >
                Previous
            </button>
        </div>
    )
}