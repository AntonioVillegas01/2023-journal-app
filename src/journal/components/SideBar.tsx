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
import SideBarItem from "./SideBarItem";

const SideBar = ({drawerWidth=240}) => {

     const {displayName} = useSelector( (state:RootState) => state.auth)
    const {notes} = useSelector((state:RootState )=> state.journal)
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
                        notes.map((note,idx)=>(
                            <SideBarItem
                                key={idx}
                                note={note}
                            ></SideBarItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;
