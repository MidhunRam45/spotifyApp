import React from 'react';
import "./input.css"

type inputprop={
label?:string,
type?:string,
id?:string,
value?:string,
onChange:(e:React.ChangeEvent)=>void,
placeholder:string,
}

const Input:React.FC<inputprop> = ({ label, type, id, value, onChange, placeholder })=> {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='main-input'
            />
        </div>
    );
};

export default Input;