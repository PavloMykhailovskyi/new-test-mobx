import { observable, action, makeObservable } from "mobx";

class PostStore {
    posts = [];
    showAddForm = false;
    constructor() {
        makeObservable(this, {
            posts: observable,
            fetchPosts: action,
            addPost: action,
            showAddForm: observable,
            toggleShowAddForm: action,
        });
    }

    fetchPosts = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            this.posts = data;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    addPost = (post) => {
        this.posts.push(post);
    };

    toggleShowAddForm = () => {
        this.showAddForm = !this.showAddForm;
    };
}

const postStore = new PostStore();
export default postStore;
