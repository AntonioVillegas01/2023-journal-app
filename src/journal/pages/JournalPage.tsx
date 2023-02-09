import {IconButton, Typography} from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import NothingSelectedView from "../../views/NothingSelectedView";
import NoteView from "../../views/NoteView";
import {AddOutlined} from "@mui/icons-material";



const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView/>
            {/*<NoteView/> */}

            <IconButton size='large'
                        sx={{
                            color: 'white',
                            backgroundColor: 'error.main',
                            position: 'fixed',
                            right: 50,
                            bottom: 50,
                            '&:hover': {
                                backgroundColor:'error.main', opacity:0.9,

                            }
                        }}
            >
                <AddOutlined sx={{fontSize:30}}/>
            </IconButton>
        </JournalLayout>


    );
};

export default JournalPage;
