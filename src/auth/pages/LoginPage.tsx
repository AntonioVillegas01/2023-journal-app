import {useDispatch, useSelector} from "react-redux";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom"
import {Google} from "@mui/icons-material";
import AuthLayout from "../layout/AuthLayout";
import {useForm} from "../../hooks";
import {checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword} from "../../store/auth";
import {RootState} from "../../store";
import {useMemo, useState} from "react";



const Loginpage = () => {


    const {status,errorMessage} = useSelector((state:RootState) => state.auth)
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);


    const formValidations = {
        email: [(value)=> value.includes('@'), 'El correo debe de tener una @'],
        password: [(value)=> value.length >= 6, 'El password debe de tener mas de 6 letras'],
    }
    const {
        email,
        emailValid,
        password,
        passwordValid,
        isFormValid,
        onInputChange,
        formState,
    } = useForm({
        email: 'marco@google.com',
        password: '123456'
    }, formValidations)
    
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true)
        if(!isFormValid)return;

        // @ts-ignore
        dispatch(startLoginWithEmailPassword(formState))
    }

    const onGoogleSignIn = () => {
        console.log(onGoogleSignIn)
        // @ts-ignore
        dispatch(startGoogleSignIn(email, password))
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} >
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField
                            label={"Correo"}
                            type={"email"}
                            name="email"
                            value={email}
                            placeholder="correo@google.com"
                            fullWidth
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted }
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField
                            label={"Contraseña"}
                            type={"password"}
                            name="password"
                            value={password}
                            placeholder="correo@google.com"
                            fullWidth
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted }
                            helperText={passwordValid}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                    <Grid
                        item
                        xs={12}
                        display={!!errorMessage ? '': 'none'}
                    >
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <Button
                            disabled={isAuthenticating}
                            type="submit" variant="contained" fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <Button
                            disabled={isAuthenticating}
                            onClick={onGoogleSignIn} variant="contained" fullWidth>
                            <Google/>
                            <Typography sx={{ml:1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent="end">
                    <Link component={RouterLink} color="inherit" to="/auth/register">
                        Crear una Cuenta
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default Loginpage;
