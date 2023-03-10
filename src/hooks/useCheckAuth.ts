import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {FirebaseAuth} from "../firebase/config";
import {login, logout} from "../store/auth";
import {startLoadingNotes} from "../store/journal";


export const useCheckAuth = () => {
    const {status} = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({}));
            const {uid, email, displayName, photoURL} = user;
            dispatch(login({uid, email, displayName, photoURL}))
            // @ts-ignore
            dispatch(startLoadingNotes())

        })
    }, []);

    return{
        status
    }
}
