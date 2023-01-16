import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';
import Input from '../../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/loginService';
 
const  initialValues={email: '',password:''};
      
    const validationSchema=Yup.object({
        email:Yup.string().email("invalid email format").required("email is required"),
        password:Yup.string().required("password is required"),
    });

 const Login = () => {
  const navigate=useNavigate();
  const [error,setError]=useState(null);
  const onSubmit=async(values, { resetForm }) => {
    try {
      const data=await loginUser(values);
      navigate("/")
      console.log(data)
    } catch (err) {
      setError(err.response.data.message)
    }
    resetForm();
   }
    
     const formik=useFormik({initialValues,onSubmit,validationSchema,validateOnMount:true})
       return (

         <div className='formContainer'>
            <form onSubmit={formik.handleSubmit}>
           <Input formik={formik} name="email" type='email' label="email" />
           <Input formik={formik} name="password" type='password' label="password" />
           <button type="submit" disabled={!formik.isValid}>
             Submit
           </button>
           {error && <p>{error}</p> }
           <Link to={'/signup'}>
            <p>not sign up yet ?</p>
           </Link>
         </form>
         </div>
       
 );
}
 
 export default Login;