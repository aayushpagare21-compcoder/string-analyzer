// React Component  
import React, {useState} from "react"; 

//Function based Component
export default function FormText(props) { 

  // Enter text here would be set default value for text 
  const handleup = ()=> {  
    let newText = text.toUpperCase(); 
    setText(newText);
  }  
 const handlelow = ()=> {  
    let newText = text.toLowerCase(); 
    setText(newText);
  }  
  const handlecal = ()=> {  
    try {
        setText(eval(text)); 
    } catch (error) {
        setText(''); 
        {props.showAlert("enter a valid expression", "danger")}
    }
  }  
  const handleupchange = (event)=> { 
    setText(event.target.value);
  } 
 
  const [text, setText] = useState('Write Something');
  return (
    <> 
      <div className="container my-4"> 
      <h1>{props.heading}</h1>
          <div className="mt-4 mb-2">
            <label for="exampletext" className="form-label">
              Enter string
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              aria-describedby="text" 
              onChange={handleupchange}  
              value={text}
            />
          </div>
         
          <button className="btn btn-primary my-4" onClick={handleup}> 
            Uppercase
          </button>
          <button className="btn btn-primary my-4 mx-3" onClick={handlelow}> 
            Lowercase
          </button>
          <button className="btn btn-primary my-4 mx-1" onClick={handlecal}> 
            Calculate
          </button>
      </div>
    </>
  );
}         
