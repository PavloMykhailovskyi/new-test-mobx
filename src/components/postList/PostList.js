import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import postStore from "../store/store";
import { Box, Grid, Typography } from "@mui/material";
import { PostItem } from "../postItem/PostItem";
import { AddButton } from "../button/Button";

const PostList = observer(() => {
    const { fetchPosts, posts, toggleShowAddForm } = postStore;
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
            }}
        >
            <AddButton onClick={() => toggleShowAddForm()}>
                Create Post
            </AddButton>
            <Typography variant="h2" component="h2" sx={{ mb: 4, mt: 2 }}>
                Posts
            </Typography>
            <Grid container spacing={2}>
                {posts.map(({ id, title, body }) => (
                    <PostItem key={id} title={title} body={body} />
                ))}
            </Grid>
        </Box>
    );
});

export default PostList;
