import Card from "./Cards";

function Tours({tours , RemoveTour , ShowRefresh }){

    return(
        <div className="container">
            <div>
                <h1 className="heading">PLAN WITH US</h1>
            </div>
            <div className="Main-TourBox">
                {
                    tours.map((tour) => {
                        // By using {...tour}, you conveniently pass all the properties of the tour object without needing to write each one out.
                        // By passing RemoveTour={RemoveTour}, you specify that this particular prop is intended to be a function or method that the Card component can call when it needs to perform the action of removing a tour.
                        return <Card key={tour.id} {...tour} RemoveTour ={RemoveTour}></Card>;
                    })
                }
            </div>
        </div>
    );
};
export default Tours ;
