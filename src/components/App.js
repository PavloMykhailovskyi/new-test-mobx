import { observer } from "mobx-react-lite";
import "./App.css";
import PostList from "./postList/PostList";
import postStore from "./store/store";
import { CreatePostForm } from "./createPost/CreatePost";

const App = observer(() => {
    const { showAddForm } = postStore;
    return <>{showAddForm ? <CreatePostForm /> : <PostList />}</>;
});

export default App;
