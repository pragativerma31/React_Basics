import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';


function Card({name ,job , image , text }){
    return(
        <div className="Card">
            <div className="profile-pic">
                <img src={image} alt={name}></img>
            </div>
            <div className="name">
                <h3>{name}</h3>
            </div>
            <div className="job">
                <span>{job}</span>
            </div>
            <div className="description">
                <span><FontAwesomeIcon icon={faQuoteLeft}size="xl" /></span>
                <p>{text}</p>
                <span><FontAwesomeIcon icon={faQuoteRight} size="xl" /></span>
            </div>
        </div>
    )
}
export default Card;