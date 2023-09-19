import React from "react";
import "./Form.css";

export default function Form({ children, setFunction, value }){
    function handleOnChange(e){
        setFunction(Number(e.target.value));
    }
    return (
        <div className="form">
            <span>
                {children}
            </span>
            <input className="inputNumber" type="text" placeholder={children} value={value} onChange={(e) => handleOnChange(e)} />
        </div>
    )
}