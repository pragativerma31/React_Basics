import { useContext } from "react"
import { AppContext } from "../content/Appcontext"

export default function Next(){
    const{setpage} = useContext(AppContext);
    const{page} = useContext(AppContext);


    function NextHandler(){
        setpage(page+1);
    }
    return(
        <div onClick={NextHandler} className=" w-[70px] h-[30px] flex justify-center items-center bg-transparent hover:bg-blue-500 rounded  text-black  hover:text-white font-semibold  ">
            <button>
                Next
            </button>
        </div>
    )
}