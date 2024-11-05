import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


function Prev({PrevHandler}){
    return(
        <div className="Prev-button">
            <button onClick={PrevHandler}> <FontAwesomeIcon icon={faChevronLeft} /></button>
        </div>
    )
}
export default Prev;