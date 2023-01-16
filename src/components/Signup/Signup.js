import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './signup.css';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import { signupUser } from '../../services/signupService';
 
const  initialValues={ name: '', email: '',phoneNumber:'',password:'',passwordConfirmation:'' };
      

    const validationSchema=Yup.object({
        name:Yup.string().required('name is required'),
        email:Yup.string().email("invalid email format").required("email is required"),
        phoneNumber:Yup.string().required("phone number is required"),
        password:Yup.string().required("password is required"),
        passwordConfirmation:Yup.string().required("password confirmation is required").oneOf([Yup.ref("password"),null],"password is reqiured")
    });

 const Signup = () => {
  const [error,setError]=useState(null);


  const onSubmit=async (values, { resetForm }) => {
    const {name,email,phoneNumber,password}=values;
    const userData={name,email,phoneNumber,password};
    try {
      const {data}= await signupUser(userData)
      console.log(data)
    } catch (err) {
      console.log(err.response.data.message)
      if(err.response && err.response.data.message){
        setError(err.response.data.message)
      }
    }
    resetForm();
   };
    
     const formik=useFormik({initialValues,onSubmit,validationSchema,validateOnMount:true})
       return (

         <div className='formContainer'>
            <form onSubmit={formik.handleSubmit}>
           <Input formik={formik} name="name" label="name" />
           <Input formik={formik} name="email" type='email' label="email" />
           <Input formik={formik} name="phoneNumber" type='tel' label="tel number" />
           <Input formik={formik} name="password" type='password' label="password" />
           <Input formik={formik} name="passwordConfirmation" type='password' label="password confirmation" />
           <button type="submit" disabled={!formik.isValid}>
             Submit
           </button>
           {error && <p style={{color:"red"}}>{error}</p>}
           <Link to={'/login'}>
            <p>Already login ?</p>
           </Link>
         </form>
         </div>
       
 );
}
 
 export default Signup;