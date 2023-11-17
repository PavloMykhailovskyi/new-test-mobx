import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                mt: 5,
                height: "100vh",
            }}
        >
            <CircularProgress />
        </Box>
    );
};
