import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

const AuthLayout = ({children, title= ''}) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{minHeight: "100vh", backgroundColor: "primary.main", padding: 4}}
        >
            <Grid item
                  className="box-shadow animate__animated animate__faster animate__tada"
                  xs={3}
                  sx={{
                      backgroundColor: "white",
                      padding: 3,
                      borderRadius: 2,
                      width: {md:450}
            }}
            >
                <Typography variant="h5" sx={{mb: 1}}>{title}</Typography>
                {children}
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
