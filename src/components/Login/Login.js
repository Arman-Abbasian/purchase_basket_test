import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';
 
 const  initialValues={email: '',password:''};
      
      const onSubmit=(values, { resetForm }) => {
        console.log(values);
        resetForm();
       }
    const validationSchema=Yup.object({
        email:Yup.string().email("invalid email format").required("email is required"),
        password:Yup.string().required("password is required"),
    });

 const Login = () => {
    
     const formik=useFormik({initialValues,onSubmit,validationSchema,validateOnMount:true})
       return (

         <div className='formContainer'>
            <form onSubmit={formik.handleSubmit}>
           <Input formik={formik} name="email" type='email' label="email" />
           <Input formik={formik} name="password" type='password' label="password" />
           <button type="submit" disabled={!formik.isValid}>
             Submit
           </button>
           <Link to={'/signup'}>
            <p>not sign up yet ?</p>
           </Link>
         </form>
         </div>
       
 );
}
 
 export default Login;