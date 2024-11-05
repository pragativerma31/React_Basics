


function Option({title , setCategory , category} ){
    return(
        <div >
            <button onClick={() => setCategory(title) } style={{border: category === title ? `2px white solid` : `none`}}>{title}</button>
            {/* The component renders a button for each category option. When clicked, it updates the selected category using setCategory and visually highlights the active category by applying a conditional border. */}
        </div>
    );
}

export  default Option;