// When you write <Card {...tour} />, you are passing each property in the tour object as a separate prop to Card. This is a convenient and concise way to pass multiple properties without explicitly naming each one.

import { useState } from "react";

// Destructuring allows you to extract specific properties directly, making it easy to use these properties without having to reference props.id, props.name, etc.
// In React, when you receive props, they are typically passed as a single object.

function Card({id, name , price , image , info ,RemoveTour}){
    // inside the brackets you can perform any calculations and the result will be embedded into the string
    // the beackslash helps to create strings that span multiple lines

    const [readmore , setReadMore] = useState(false);

    function ReadMoreHandler(){
        setReadMore(!readmore);
    }

    // const description = `${info.substring(0,200)}`;

    const description = `${readmore ? `${info}` : `${info.substring(0,200)}` }`

    return(
        <div>
            <div className="Upper-part">
                <img src={image} alt="city-image"></img>
                <div>
                    <h5 className="city-name">{name}</h5>
                    <h5 className="tour-price">{price}</h5>
                </div>
            </div>
            <div className="middle-part">
                {/* {description}...
                <span className="read-more" onClick={() => ReadMoreHandler()}>
                    {readmore ? `${info} show less` : `${description}...read more`}
                </span> */}

                {description}
                <span className="read-more" onClick={() => ReadMoreHandler()}>
                    {readmore ? ` show less` : `....read more`}
                </span>


            </div>
            <div className="lower-part">
                <button className="not-interested" onClick={() => RemoveTour(id)}> 
                    Not Interested
                </button>
            </div>

        </div>
    );
}
export default Card ;