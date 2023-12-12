
import { useState } from 'react';
import './Post.css'

const Post = ({post}) => {

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
            <div className="post-header">
                <h3 className='name'>{post.name}</h3>
                <span className='date'>{post.timePosted}</span>
            </div>
            <p className='post-body'>{post.postBody}</p>
            <div className='button-container'>
                <button onClick={handleLike} className={`post-button ${likeBtn}`}></button>
                <button onClick={handleDislike} className={`post-button ${dislikeBtn}`}></button>
            </div>

        </div>
    );
}
 
export default Post;