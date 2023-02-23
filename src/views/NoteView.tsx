import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {DeleteOutline, SaveOutlined, UploadOutlined} from "@mui/icons-material";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'


import ImageGallery from "../journal/components/ImageGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {useForm} from "../hooks";
import {useEffect, useMemo, useRef} from "react";
import {setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles} from "../store/journal";


const NoteView = () => {

    const dispatch:(dispatch:any) => AppDispatch  = useDispatch();
    const {active:note, messageSaved, isSaving} = useSelector((state:RootState) => state.journal)

    // @ts-ignore
    const {body,title,date,onInputChange,formState} = useForm(note)

    const fileInputRef = useRef<HTMLInputElement>();

    const dateString = useMemo(() => {
        const newDate = new Date(date)

        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState]);

    const onSaveNote = ()=> {
        // @ts-ignore
        dispatch(startSaveNote())
    }

    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire({
                title: 'Nota Actualizada',
                text: messageSaved,
                icon: 'success',
            })
        }
    }, [messageSaved]);


    const onFileInputChange = ({target}) =>  {
        console.log(target.files)
        if (target.files === 0) return;

         dispatch(startUploadingFiles(target.files))
    }


    const onDelete = () => {
        dispatch(startDeletingNote())
    }

    return (
        <Grid container justifyContent="space-between" sx={{mb:1}}
              className="box-shadow animate__animated animate__faster animate__backInRight">
            <Grid item >
                <Typography fontSize={30}>{dateString}</Typography>
            </Grid>
            <Grid item >
                <input type="file"
                       ref={fileInputRef}
                       multiple
                       onChange={ onFileInputChange}
                       style={{display:"none"}}
                />
                <IconButton color="primary"
                            disabled={isSaving}
                            onClick={()=> fileInputRef.current.click()}
                >
                    <UploadOutlined></UploadOutlined>
                </IconButton>
                <Button disabled={isSaving}
                    onClick={ onSaveNote} color="primary" sx={{padding:2}}>
                    <SaveOutlined sx={{fontSize:30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField type="text"
                           variant="filled"
                           fullWidth
                           placeholder="Ingrese un titulo"
                           label={"Titulo"}
                           sx={{border:'none', mb:1}}
                           name="title"
                           value={title}
                           onChange={onInputChange}
                />
                <TextField type="text"
                           variant="filled"
                           fullWidth
                           multiline
                           placeholder="¿Que sucedio en el día de hoy?"
                           minRows={5}
                           name="body"
                           value={body}
                           onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent="end">
                <Button onClick={onDelete} sx={{mt:2}} color="error"
                >
                    <DeleteOutline></DeleteOutline>
                </Button>
            </Grid>
             {/*Image Galery */}
            <ImageGallery images={note.imageUrls}
            />
        </Grid>
    );
};

export default NoteView;
