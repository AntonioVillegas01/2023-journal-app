import {doc,collection,setDoc, deleteDoc} from 'firebase/firestore/lite';
import {FirebaseDB} from "../../firebase/config";
import {
    addNewEmptyNote, deleteNoteById,
    noteUpdated,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving
} from "./journal.slice";
import {fileUpload, loadNotes} from "../../helpers";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        await setDoc( newDoc, newNote );

        // @ts-ignore
        newNote.id = newDoc.id;

        console.log(newNote);

        //! dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth

        if(!uid) throw new Error("El uid del usuario No existe")

       const notes =  await loadNotes(uid);

        dispatch(setNotes(notes))

    }
}

export const startSaveNote = ()=> {
    return async (dispatch, getState) => {

        dispatch(setSaving())
        const {uid} = getState().auth
        const {active:note} = getState().journal

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const fbPath = `${uid}/journal/notas/${note.id}`
        const docRef = doc(FirebaseDB, fbPath)
        await setDoc(docRef,noteToFireStore, {merge:true})

        dispatch(noteUpdated(note))

    }
}


export const startUploadingFiles = (files=[])=> {
    return async (dispatch) => {
        // pone app en estado de carga
        dispatch(setSaving())
        // subir todos los archivos al mismo tiempo con promesas
        const fileUploadPromises = [];

        for (const file of files) {
            // creamos el arreglo de promesas
            fileUploadPromises.push( fileUpload(file))
        }
        // almacenamos las promesas resueltas
        const photosUrls = await  Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = ()=> {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        const {active:note} = getState().journal

        //firebase delete
        const docRef = doc(FirebaseDB,`${uid}/journal/notas/${note.id}`)
        await deleteDoc( docRef)

        // store delete
        dispatch(deleteNoteById(note.id))



    }
}