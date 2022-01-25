import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUppercase=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLowercase=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }
    const handleclearase=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText="";
        setText(newText)
        props.showAlert("clear","success");
    }
    const handlereverce=()=>{
        // console.log("uppercase was clicked"+ text);
        var words = [];
        words = text.match(/\S+/g);
        var result = "";
        for (var i = 0; i < words.length; i++) {
            result += words[i].split('').reverse().join('') + " ";
        }
    
        let newText=result;
        setText(newText)
        props.showAlert("string reverse","success");
    }
    const handleReverceWord=()=>{
        let newText = text.split(" ").map(word => word.split("").reverse().join(""));
        setText(newText.join(" "))
    }


    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text,setText] =useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 style={{color: props.mode==='dark'?'#15202B':'black'}}>{props.heading}</h2>
            <div className="container my-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#8899A6':'#F9F1F0'}} id="myBox" rows="7"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUppercase}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowercase}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlereverce}>Reverse the string</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverceWord}>Reverse the Word</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearase}>Clear</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'#15202B':'black'}}>
           <h2>Your Text Summary </h2>
           {/* <p>
               {
                  text.split(" ").length>1?text.match(/(\w+)/g).length:0 
               } 
           Words,  {text.length} Character</p> */}

            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, 
               {text.replace(/ /g,"").length} Character </p>

           <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter text above"}</p>
        </div>
        </>
    )
}
