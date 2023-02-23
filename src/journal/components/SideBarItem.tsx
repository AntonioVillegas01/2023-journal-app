import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
// @ts-ignore
import React, {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../../store/journal";

type SideBarItemProps = {
    note: any;
}

const SideBarItem: React.FC<SideBarItemProps> = ({note}) => {

    const {
        title='',
        body,
        id,
        date,
        imageUrls=[]
    } = note

    const dispatch = useDispatch();


    const onClickNote = () =>{
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title}/>
                    <ListItemText primary={body}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};

export default SideBarItem;
