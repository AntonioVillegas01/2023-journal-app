import {IconButton, Typography} from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import NothingSelectedView from "../../views/NothingSelectedView";
import NoteView from "../../views/NoteView";
import {AddOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {startNewNote} from "../../store/journal";
import {RootState} from "../../store";



const JournalPage = () => {

    const dispatch = useDispatch()

    const {isSaving,active}= useSelector((state:RootState) => state.journal)

    const onClickNewNote=()=>{

        // @ts-ignore
        dispatch(startNewNote())

    }
    return (
        <JournalLayout>
            {
                (!!active)
                    ? <NoteView/>
                    :<NothingSelectedView/>
            }
            <IconButton
                onClick={onClickNewNote}
                size='large'
                disabled={isSaving}
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
