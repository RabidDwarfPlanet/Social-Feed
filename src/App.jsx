import React, { useState } from "react";
import "./App.css";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <CreatePostForm onCreatePost={handleNewPost}/>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
