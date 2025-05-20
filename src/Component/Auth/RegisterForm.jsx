import { Button, Typography, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Authentication/Action';

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER"
};

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch()


  const handleSubmit = (values) => {
    console.log("Form Values:", values)
            dispatch(registerUser({userData:values,navigate}))
    
  };

  return (
    <div>
      <Typography variant='h5' align='center' sx={{ mb: 2 }}>
        REGISTER
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Field 
              as={TextField} 
              name="fullName" 
              label="Full Name" 
              fullWidth 
              margin="normal"
              variant="outlined" 
            />
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

            {/* Role Dropdown */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                value={values.role}
                onChange={(e) => setFieldValue("role", e.target.value)}
              >
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                <MenuItem value="ROLE_RESTAURANT_OWNER">Owner</MenuItem>
              </Select>
            </FormControl>

            <Button sx={{ mt: 5, padding: "1rem" }} fullWidth type='submit' variant='contained'>
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Already have an account?
        <Button size='small' onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
}

export default RegisterForm;
