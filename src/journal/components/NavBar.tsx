import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {LogoutOutlined, MenuOutlined} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {startLogOut} from "../../store/auth";


const NavBar = ({drawerWidth =240}) => {

    const dispatch = useDispatch();

    const onLogOut =()=> {
        // @ts-ignore
        dispatch( startLogOut());
    }

    return (
        <AppBar position="fixed"
                sx={{
                    width:{sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`}
        }}
        >
            <Toolbar>
                <IconButton color="inherit"
                            edge="start"
                            sx={{mr:2, display: {sm:"none"}}}
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component="div">Journal App</Typography>
                    <IconButton color="error"
                                onClick={onLogOut}
                    >
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
