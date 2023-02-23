import {useDispatch, useSelector} from "react-redux";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom"
import {Google} from "@mui/icons-material";
import AuthLayout from "../layout/AuthLayout";
import {useForm} from "../../hooks";
import {checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword} from "../../store/auth";
import {RootState} from "../../store";
import {useMemo, useState} from "react";



const formData = {
    email: '',
    password: ''
}


const Loginpage = () => {


    const {status,errorMessage} = useSelector((state:RootState) => state.auth)
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);


    const formValidations = {
        email: [(value)=> value.includes('@'), 'El correo debe de tener una @'],
        password: [(value)=> value.length >= 6, 'El password debe de tener mas de 6 letras'],
    }
    // @ts-ignore
    const { email, password, onInputChange } = useForm(formData);
    
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        // console.log({ email, password })
        // @ts-ignore
        dispatch( startLoginWithEmailPassword({ email, password }) );
    }

    const onGoogleSignIn = () => {
        console.log(onGoogleSignIn)
        // @ts-ignore
        dispatch(startGoogleSignIn(email, password))
    }

    return (
        <AuthLayout title="Login">
            <form autoComplete="off"
                onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>


                    <Grid
                        container
                        display={ !!errorMessage ? '': 'none' }
                        sx={{ mt: 1 }}>
                        <Grid
                            item
                            xs={ 12 }
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating }
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating }
                                variant='contained'
                                fullWidth
                                onClick={ onGoogleSignIn }>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>


            </form>

        </AuthLayout>
    );
};

export default Loginpage;
