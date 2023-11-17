import { observable, action, makeObservable } from "mobx";

class PostStore {
    posts = [];
    createdPosts = [];
    showAddForm = false;
    isLoading = 0;
    constructor() {
        makeObservable(this, {
            posts: observable,
            fetchPosts: action,
            addPost: action,
            showAddForm: observable,
            toggleShowAddForm: action,
            isLoading: observable,
            toggleLoading: action,
            createdPosts: observable,
        });
    }

    fetchPosts = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();

            this.toggleLoading();
            setTimeout(
                action(() => {
                    this.posts = data;
                    console.log(data);
                    this.toggleLoading();
                }, 5000)
            );
        } catch (error) {
            console.error(error);
        }
    };

    addPost = action((post) => {
        this.createdPosts.push(post);
    });

    toggleShowAddForm = action(() => {
        this.showAddForm = !this.showAddForm;
    });

    toggleLoading = action(() => {
        this.isLoading = !this.isLoading;
    });
}

const postStore = new PostStore();
export default postStore;
