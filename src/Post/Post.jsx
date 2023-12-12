
import { useState } from 'react';
import './Post.css'

const Post = ({name, postBody}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = (e) => {
        setIsLiked(!isLiked)
        setIsDisliked(false)
    }
    const handleDislike = (e) => {
        setIsDisliked(!isDisliked)
        setIsLiked(false)
    }

    const likeBtn = isLiked ? "active-like" : "like"
    const dislikeBtn = isDisliked ? "active-dislike" : "dislike"

    return ( 
        <div className="post">
            <h3 className='name'>{name}</h3>
            <p className='post-body'>{postBody}</p>
            <div className='button-container'>
                <button onClick={handleLike} className={`post-button ${likeBtn}`}></button>
                <button onClick={handleDislike} className={`post-button ${dislikeBtn}`}></button>
            </div>
        </div>
    );
}
 
export default Post;