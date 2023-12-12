const Post = ({name, postBody}) => {
    return ( 
        <div className="Post">
            <h4>{name}</h4>
            <p>{postBody}</p>
            <div>
                <p>like</p>
                <p>dislike</p>
            </div>
        </div>
    );
}
 
export default Post;