import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { useState ,useEffect } from 'react';
import { toast } from 'react-toastify';

function Card({course}){
    const desc = `${course.description.substring(0,120)}`
    const [liked, setLiked] = useState(false);
    const likedNotif = () => toast.success("Liked");
    const DislikedNotif = () => toast.error("Like Removed ");

    // Tracks whether it's the first render to prevent initial notification.
    const [FirstRender , setFirstRender] = useState(true);

    const LikeHandler = () => {
        setLiked(!liked);
    };

    useEffect(() => {
        // Skips notifications on the first render by setting FirstRender to false.
        if(FirstRender)setFirstRender(false);
        else{
            if (liked) {
                likedNotif();
            } 
            else {
                DislikedNotif();
            }
        }

    }, [liked]); 
    

    
    return(
        <div className="card">
            <div>
                <img src={course.image.url} alt={course.image.alt} className="course-img"></img>
            </div>
            <div className='Like-box' onClick={() => {LikeHandler()}}>
                <FontAwesomeIcon icon={liked? faSolidHeart : faRegularHeart  } size="xl" style={{ color: liked ? "#e5155e" : "white" }} />
            </div>
            <div>
                <h5>{course.title}</h5>
            </div>
            <div>
                {desc}...
            </div>


        </div>
    );
}
export default Card;