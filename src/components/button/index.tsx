import React from "react";
import "./button.css";

type buttonprop={
    content:string,
    onClick?:()=>void,
    icon?:string,
    backgroundColor?:string,
    color?:string,
    fontSize?:string,
    type?:any
}

const Button:React.FC<buttonprop> = ({
    content,
    onClick,
    icon,
    backgroundColor,
    color,
    fontSize,
    type
}) => {
    return (
        <button
            style={{ backgroundColor, color, fontSize }}
            onClick={onClick}
            className="main-butt"
            type={type}
        >
            {icon && <img src={icon} alt="Icon" />}
            {content}
        </button>
    );
};

export default Button;