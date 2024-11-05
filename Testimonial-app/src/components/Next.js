import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Next({NextHandler}){
    return(
        <div className="Next-button">
            <button onClick={NextHandler}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    )

}
export default Next;
