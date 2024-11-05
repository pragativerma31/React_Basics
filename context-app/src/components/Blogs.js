import { useContext } from "react";
import { AppContext } from "../content/Appcontext";
import Blog from "./Blog";
import Spinner from "./spinner";

function Blogs(){
    const {posts} =useContext(AppContext);
    const {loading} = useContext(AppContext);

    return(
        <div className='w-[670px]  flex flex-col  justify-center items-center mt-[70px] mb-[100px]'>
            {
                loading ? <Spinner></Spinner> : posts.length === 0 ? <h1>No Content Found</h1> : posts.map((post) => {
                    return <Blog {...post} key={post.id} ></Blog>
                })
            }
        </div>
    )
}
export default Blogs;