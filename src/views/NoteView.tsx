import {Button, Grid, TextField, Typography} from "@mui/material";
import {SaveOutlined} from "@mui/icons-material";
import ImageGallery from "../journal/components/ImageGallery";


const NoteView = () => {
    return (
        <Grid container justifyContent="space-between" sx={{mb:1}}
              className="box-shadow animate__animated animate__faster animate__backInRight">
            <Grid item >
                <Typography fontSize={30}>28 agosto, 2023</Typography>
            </Grid>
            <Grid item >
                <Button color="primary" sx={{padding:2}}>
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
                />
                <TextField type="text"
                           variant="filled"
                           fullWidth
                           multiline
                           placeholder="¿Que sucedio en el día de hoy?"
                           minRows={5}
                />
            </Grid>
             {/*Image Galery */}
            <ImageGallery/>
        </Grid>
    );
};

export default NoteView;
