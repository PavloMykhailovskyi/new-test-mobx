import { observable, action, makeObservable } from 'mobx';

class PostStore {
    posts = [];
    createdPosts = [];
    showAddForm = false;
    isLoading = false;
    error = false;
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
            error: observable,
            toggleError: action,
        });
    }

    fetchPosts = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const data = await response.json();

            this.toggleLoading();
            setTimeout(
                action(() => {
                    this.posts = data;
                    console.log(data);
                    this.toggleLoading();
                }),
                5000
            );
        } catch (error) {
            this.toggleError();
        }
    };

    addPost = action(post => {
        this.createdPosts.push(post);
    });

    toggleShowAddForm = action(() => {
        this.showAddForm = !this.showAddForm;
    });

    toggleLoading = action(() => {
        this.isLoading = !this.isLoading;
    });

    toggleError = action(() => {
        this.error = !this.error;
    });
}

const postStore = new PostStore();
export default postStore;
