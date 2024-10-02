import React from 'react';
import "./input.css";

type inputProp = {
  label?: string;
  type?: string;
  id?: string;
  placeholder: string;
  register: any; 
  errorMessage?: string; 
};

const Input: React.FC<inputProp> = ({ label, type, id, placeholder, register, errorMessage }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className='main-input'
        {...register} 
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
