
function RefreshButton( { RefreshHandler}){
    return(
        <div className="Refresh-box">
            <h1 className="oops-1">Oops! Looks like we have nothing {String.fromCharCode(0x2639)} </h1>
            <h3 className="oops-2">Click To Refresh</h3>
            <button className="refresh-button" onClick={() => RefreshHandler()}>Refresh</button>
        </div>
    );
}
export default RefreshButton;