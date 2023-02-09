import {Grid, Typography} from "@mui/material";
import {StarOutline} from "@mui/icons-material";

const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main"}}

            className="box-shadow animate__animated animate__faster animate__backInRight"
        >
            <Grid item xs={12}>
                <StarOutline sx={{fontSize:100, color:"white"}}/>
            </Grid>
            <Grid item xs={12}>
                <Typography color="white" variant="h5">Selecciona una entrada</Typography>
            </Grid>
        </Grid>
    );
};

export default NothingSelectedView;
