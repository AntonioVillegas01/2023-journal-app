import {FirebaseDB} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore/lite";


export const loadNotes = async (uid='')=>{
    if (!uid) throw new Error('EL uid del usuario no existe')

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notas`);
    const docs = await getDocs(collectionRef);


    const notes= []

    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    })
    console.log(notes)
    return notes;
}