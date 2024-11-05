import {useState } from "react";
import Card from "./Card";
import Next from "./Next";
import Prev from "./Prev";
import Suprise from "./Supriseme";

function Testimonials({data}){
    const[profileNo , setProfileNo] =useState(0);

    function getRandomInt() {
        return Math.floor(Math.random() * 5); // Random integer between 0 and 4 inclusive
    }

    function supriseHandler(){
        const newProfileNo =getRandomInt();
        setProfileNo(newProfileNo);
    }

    function PrevHandler(){
        if(profileNo === 0){
            setProfileNo(4);
        }
        else{
            setProfileNo(profileNo-1);
        }
    }
    function NextHandler(){
        if(profileNo === 4){
            setProfileNo(0);
        }
        else{
            setProfileNo(profileNo+1);
        }
    }

    return(
        <div className="MainBox">
            <div className="Cards-box">
                <Card {...data[profileNo]}></Card>
            </div>
            <div className="Left-right-buttons">
                <Prev PrevHandler={PrevHandler}></Prev>
                <Next NextHandler={NextHandler}></Next>
            </div>
            <div className="suprise">
                <Suprise supriseHandler={supriseHandler}></Suprise>
            </div>
        </div>
    )
}
export default Testimonials;