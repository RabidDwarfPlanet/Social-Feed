
import Post from '../Post/Post';
import './PostList.css'

const PostList = ({posts}) => {
    const PostItems = posts.map((post, i) => <Post key={i} post={post}/>)
    return ( 
        <div className="post-class">
            <h2 className="post-list-header">Posts</h2>
            <div >
                {PostItems}
            </div>
        </div>
    );
}
 
export default PostList;