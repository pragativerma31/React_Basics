import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({children}){

    const [loading ,setloading] = useState(false);
    const [posts,setposts] = useState([]);
    const [page , setpage] = useState(1);
    const [totalpages , setTotalPages] = useState();

    async function FetchData() {
        setloading(true);
        let url = `${baseUrl}?page=${page} `
        try{
            const response = await fetch(url);
            const data = await response.json();
            setpage(data.page);
            setTotalPages(data.totalPages);
            setposts(data.posts);
        }
        catch(error){
            console.log("error occurred")
        }
        setloading(false);
    }

    const value ={
        posts,
        setposts,
        page,
        setpage,
        loading,
        setloading,
        totalpages,
        setTotalPages,
        FetchData
    };

    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}