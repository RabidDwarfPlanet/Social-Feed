import './App.css';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import Header from './Components/Header/Header';
import PostList from './Components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreatePostForm/>
      <PostList/>
    </div>
  );
}

export default App;
