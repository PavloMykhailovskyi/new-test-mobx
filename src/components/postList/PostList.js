import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import postStore from '../store/store';
import { Box, Grid, Typography } from '@mui/material';
import { PostItem } from '../postItem/PostItem';
import { AddButton } from '../button/Button';
import { DotsLoader } from '../loader/Loader';

const PostList = observer(() => {
    const {
        fetchPosts,
        posts,
        toggleShowAddForm,
        isLoading,
        createdPosts,
        error,
    } = postStore;
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4,
            }}
        >
            <>
                <AddButton onClick={() => toggleShowAddForm()}>
                    Create Post
                </AddButton>
                <Typography variant="h2" component="h2" sx={{ mb: 4, mt: 2 }}>
                    Posts
                </Typography>
            </>
            <DotsLoader />
            <Grid container spacing={2}>
                {[...posts, ...createdPosts].map(item => (
                    <PostItem item={item} />
                ))}
            </Grid>
        </Box>
    );
});

export default PostList;
