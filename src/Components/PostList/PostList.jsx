import Post from "../../Post/Post";

const PostList = ({posts}) => {
    const PostItems = posts.map((post, i) => <Post key={i} name={post.name} postBody={post.postBody}/>)
    return ( 
        <div>
            {PostItems}
        </div>
    );
}
 
export default PostList;