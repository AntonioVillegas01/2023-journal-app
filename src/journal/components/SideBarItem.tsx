import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
// @ts-ignore
import React, {useMemo} from "react";

type SideBarItemProps = {
    title: any
    body: any
    id: any;
}

const SideBarItem: React.FC<SideBarItemProps> = ({title='', body, id}) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title]);

    return (
        <ListItem key={id}
                  disablePadding
        >
            <ListItemButton>
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
