import { Button } from "@mui/material";

export const AddButton = ({ children, ...rest }) => {
    return (
        <Button
            variant="contained"
            fullWidth
            sx={{ height: 60 }}
            type="submit"
            {...rest}
        >
            {children}
        </Button>
    );
};
