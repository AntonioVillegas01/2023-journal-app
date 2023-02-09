import {checkingCredentials, login, logout} from "./auth.slice";
import {
    loginWithEmailPassword,
    logOutFirebase,
    registerUserWithEmailPassword,
    sigInWithGoogle
} from "../../firebase/providers";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export const checkingAuthentication = (email, password)   => {
    // @ts-ignore
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}


export const startGoogleSignIn = ()=>(
    // @ts-ignore
    async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await sigInWithGoogle()

        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))

    }
)

export const startCreatingUserWithEmailPassword = ({email, password, displayName})=> (
    async (dispatch) => {

        dispatch(checkingCredentials())
        const {ok,uid, photoURL, errorMessage}= await registerUserWithEmailPassword({email, password, displayName})


        if(!ok)return dispatch(logout({errorMessage}))


        dispatch(login({uid, displayName, email, photoURL}))

    }
)

export const startLoginWithEmailPassword = ({email,password}) => (
    async (dispatch) => {

        dispatch(checkingCredentials())

        const {ok,uid, photoURL,displayName, errorMessage}= await loginWithEmailPassword({email,password})

        if(!ok)return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))

    }
)

export const startLogOut = ()=> (
    async (dispatch) => {
        await logOutFirebase()
        dispatch(logout({}))
    }
)
