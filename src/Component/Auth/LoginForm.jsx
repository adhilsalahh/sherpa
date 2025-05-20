import { Button, Typography, TextField } from '@mui/material';
import React from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../State/Authentication/Action';

const initialValues = {
    email: "",
    password: ""
};

function LoginForm() {
    const navigate = useNavigate();
    const dispatch=useDispatch()

    const handleSubmit = (values) => {
        dispatch(loginUser({userData:values,navigate}))
        
    };

    return (
        <div>
            <Typography variant='h5' align='center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button sx={{ mt: 5, padding: "1rem" }} fullWidth type='submit' variant='contained'>
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Don't have an account?  
                <Button size='small' onClick={() => navigate("/account/register")}>
                    Register
                </Button>
            </Typography>
        </div>
    );
}

export default LoginForm;
