import { useState } from "react";
import Card from "./Cards";
import Option from "./Options";
import LoadingSpinner from "./Loadingspinner";

function CardsBox({options , courses ,setLoading , loading}){
    const [category , setCategory] = useState("All");

    // The GetCourses function is used to retrieve the list of courses that will be displayed based on the currently selected category (category).
    function GetCourses() {
        // Checks if courses exists and is a valid object before proceeding.
        if (courses && typeof courses === 'object') {
            if(category === "All"){
                let allCourses = [];
                Object.values(courses).forEach((courseCategory) => {
                    courseCategory.forEach((course) => {
                        allCourses.push(course);
                    })});  
                return allCourses;
            }
            else{
                // Returns courses from the selected category or an empty array if none found.
                return courses[category] || [];

            }
        }
        // Returns an empty array if courses is invalid.
        return [];
    }

    return (
        <div className="container">
            <div className="Options">

                {
                    options.map((option) => {
                        return <Option key={option.id} {...option} setCategory={setCategory} category ={category} ></Option>
                    })
                }
                
            </div>
            <div className="cards">
                {
                    loading ? (<div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <LoadingSpinner />
                    </div>) : (GetCourses().map((course) => {
                        // Maps through filtered courses and renders each course as a Card component.
                        return <Card  key={course.id} course = {course} ></Card>
                    }))
                }
            </div>
        </div>

    );
}


export default CardsBox;