import { useState } from "react"
import React from 'react'


export default function TextForm(props) {

    const [text,setText]= useState('')

    const handleClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLOClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }

    return (
        <>
        <div className="container">
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={ text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLOClick}>Convert to Lowercase</button>
            </div>
            </div>
            <div className="container my-2">
                <h1>Your text Summary</h1>
                <p> {text.split("").length} words and {text.length} characters</p>
                <p> {0.008 * text.split("").length} minutes read</p>
                <h2>Previes</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
