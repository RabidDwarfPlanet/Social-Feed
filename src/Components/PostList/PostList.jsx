import Post from "../../Post/Post";
import './PostList.css'

const PostList = ({posts}) => {
    const PostItems = posts.map((post, i) => <Post key={i} name={post.name} postBody={post.postBody}/>)
    return ( 
        <div className="post-class">
            <h2>Posts</h2>
            <div >
                {PostItems}
            </div>
        </div>
    );
}
 
export default PostList;