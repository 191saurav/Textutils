import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclrClick = ()=>{
        console.log("tOGGLE was clicked" + text);
        let newText = " ";
        setText(newText);
    }
    const handleonchange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter text here');
    //text= "new text"; //wrong way to change the text
    //setText("new text");//right way to change the text
    return (
        <>
        <div className='container' style={{color:props.Mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.Mode==='dark'?'grey':'white', color:props.Mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleclrClick}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraspaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.Mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to Preview It Here"}</p>
        </div>
        </>
    )
}
