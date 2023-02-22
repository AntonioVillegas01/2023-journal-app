import {doc,collection,setDoc} from 'firebase/firestore/lite';
import {FirebaseDB} from "../../firebase/config";
import {addNewEmptyNote, savingNewNote, setActiveNote, setNotes} from "./journal.slice";
import {loadNotes} from "../../helpers";

export const startNewNote = ()=> {
   return async (dispatch, getState) => {

       dispatch(savingNewNote());
       //uid
       const {uid} = getState().auth;

       const newNote = {
           title: '',
           body: '',
           date: new Date().getTime(),
           id: ""

       }

       const newDoc =  doc( collection( FirebaseDB, `${uid}/journal/notas`))
       const setDocResp = await setDoc(newDoc, newNote)

       newNote.id = newDoc.id

       // dispatch
       dispatch(addNewEmptyNote(newNote))
       dispatch(setActiveNote(newNote))
       // dispatch(newNote)
       // dispatch(activarNote)


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