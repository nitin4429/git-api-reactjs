import { Link } from 'react-router-dom';
import './gitimage.css';
function Gitimage({image,id}){
    return(
        <div>
            <Link to={`/github/user/${id}`}>
            <div className="image-wrapper">
                <img className="images" src={image}  />
            </div>
            </Link>
        </div>
    )
}
export default Gitimage;