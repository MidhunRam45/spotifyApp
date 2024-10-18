import React from "react";
import "./input.css";

type inputProp = {
  label?: string;
  type?: string;
  id?: string;
  placeholder: string;
  register: any;
  errorMessage?: string;
};

const Input: React.FC<inputProp> = ({
  label,
  type,
  id,
  placeholder,
  register,
  errorMessage,
}) => {
  return (
    <div className="combine text-start mb-4">
      <label className="d-block" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="main-input ms-0"
        {...register}
      />
      {errorMessage && (
        <p className="error-message text-start">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
