import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const SideBar = ({drawerWidth=240}) => {

     const {displayName} = useSelector( (state:RootState) => state.auth)
    return (
        <Box component="nav"
             sx={{width:{sm:drawerWidth}, flexShrink: {sm:0}}}
        >
            <Drawer variant="permanent"  // temporary si es condicional dependiendo del tamañp
                    open
                    sx={{
                        display: {xs: "block"},
                        "& .MuiDrawer-paper":{boxSizing: "border-box", width: drawerWidth}
                    }}

            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ["Enero","Febrero","Marzo"].map(text=>(
                            <ListItem key={text}
                                      disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText primary={"Lorem ipsum dolor sit amet,  elit."}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;
