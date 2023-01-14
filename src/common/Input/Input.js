import React from "react";
import './input.css';



const Input=({label,name,formik,type="text"})=>{
    return(
<div>
    <label>{label}</label>
    <input id={name} type={type} {...formik.getFieldProps(name)} name={name} />
    {formik.errors[name] && formik.touched[name] && (
        <div>{formik.errors[name]}</div>
    )}
</div>
);
};

export default Input;