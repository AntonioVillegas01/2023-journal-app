import { createSlice } from '@reduxjs/toolkit';

interface IActiveNote {
    id: string;
    title: string;
    body: string;
    date: any,
    imageUrls: []
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes:[],
        active: null
    },
    reducers: {
        savingNewNote : (state) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes =action.payload;
        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    savingNewNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;

