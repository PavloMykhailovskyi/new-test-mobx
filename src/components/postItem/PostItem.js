import { Grid, Paper, Typography } from '@mui/material';

export const PostItem = ({ item }) => {
    return (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper elevation={3} sx={{ padding: 5, minHeight: 200 }}>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: 'center' }}
                >
                    {item.title}
                </Typography>
                <Typography variant="body2">{item.body}</Typography>
            </Paper>
        </Grid>
    );
};
