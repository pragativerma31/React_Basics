import { useContext } from "react";
import { AppContext } from "../content/Appcontext";
import Next from "./Next";
import Previous from "./Previous";

function Pagesinfo(){
    const {page} = useContext(AppContext);
    const {totalpages} = useContext(AppContext);

    return(
        <div className="fixed bottom-0  bg-white border-t border-gray-300 w-full h-[70px] mt-[40px] flex justify-evenly py-3 ">
            {
                page === 1 ? <Next></Next> : page=== 6 ?  <Previous></Previous> : <div className=" w-[155px] h-[40px] flex justify-between items-center"><Previous></Previous> <Next></Next> </div>
            }

            <span className="font-semibold">Page {page} of {totalpages} </span>
        </div>
    )
}
export default Pagesinfo;