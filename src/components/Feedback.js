import React from "react";
import "./Feedback.css";

export default function Feedback({ children, setFunction, value }){
    function handleOnChange(e){
        setFunction(Number(e.target.value));
    }
    return (
        <div className="feedback">
            <span>
                {children}
            </span>
            <select className="selectFeedback" value={value} onChange={(e) => handleOnChange(e)}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutley amazing (20%)</option>
            </select>
        </div>
    )
}