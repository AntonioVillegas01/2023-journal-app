import AuthLayout from "../layout/AuthLayout";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";

import {Link as RouterLink} from "react-router-dom";
import {useForm} from "../../hooks";
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startCreatingUserWithEmailPassword} from "../../store/auth";
import {RootState} from "../../store";


const formData = {
    email: 'antonio@antonio.com',
    password: '123456',
    displayName: 'Marco Garcia'
}

const formValidations = {
    email: [(value)=> value.includes('@'), 'El correo debe de tener una @'],
    password: [(value)=> value.length >= 6, 'El password debe de tener mas de 6 letras'],
    displayName: [(value)=> value.length >= 1, 'El nombre es obligatorio '],
}


interface IUseForm  {
    displayName:any;
    email:any;
    password:any;
    displayNameValid:any;
    emailValid:any;
    passwordValid:any;
    onInputChange:any;
    formState:any;
    isFormValid:any;
}

const RegisterPage = () => {

    const {status, errorMessage} = useSelector((state:RootState) => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking',[status]);
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const {
        displayName,
        email,
        password,
        displayNameValid,
        emailValid,
        passwordValid,
        onInputChange,
        formState,
        isFormValid
    } = useForm(formData,formValidations)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        setFormSubmitted(true)

        if(!isFormValid)return;

        // @ts-ignore
        dispatch(startCreatingUserWithEmailPassword(formState))

    }






    return (
        <AuthLayout title="Register">

            <h1>FormValid {isFormValid ? 'Valido': 'Invalido'}</h1>
            <form onSubmit={onSubmit} >
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label={"Nombre Completo"}
                            type={"text"}
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted }
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label={"Correo"}
                            type={"email"}
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted }
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label={"Contraseña"}
                            type={"password"}
                            placeholder="*******"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted }
                            helperText={passwordValid}
                        />
                    </Grid>
                </Grid>
                <Grid  container spacing={2} sx={{mb: 2, mt: 1}}>

                    <Grid
                        item
                        xs={12}
                        display={!!errorMessage ? '': 'none'}
                    >
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                            disabled={isCheckingAuthentication}
                            type="submit" variant="contained" fullWidth>
                            Crear Cuenta
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent="end">
                    <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
                    <Link component={RouterLink} color="inherit" to="/auth/login">
                        Ingresar
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;
