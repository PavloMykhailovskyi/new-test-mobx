import { observer } from "mobx-react-lite";
import { useState } from "react";
import postStore from "../store/store";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { AddButton } from "../button/Button";

export const CreatePostForm = observer(() => {
    const [newPost, setNewPost] = useState({ title: "", body: "" });
    const { addPost, toggleShowAddForm } = postStore;

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({
            id: Date.now(),
            ...newPost,
        });

        setNewPost({ title: "", body: "" });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h3" component="h2" sx={{ mb: 4, mt: 4 }}>
                Create Post
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1} sx={{ mb: 4 }}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            label="Title"
                            value={newPost.title}
                            onChange={(e) =>
                                setNewPost({
                                    ...newPost,
                                    title: e.target.value,
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            label="Body"
                            value={newPost.body}
                            onChange={(e) =>
                                setNewPost({ ...newPost, body: e.target.value })
                            }
                        />
                    </Grid>
                </Grid>

                <AddButton onClick={() => toggleShowAddForm()}>
                    Add Post
                </AddButton>
            </form>
        </Box>
    );
});
