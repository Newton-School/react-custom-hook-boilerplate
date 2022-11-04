import React,{useCallback,useState} from 'react'
import '../styles/App.css';
const App = () => {

 //code here 

    const [isTextChanged, setIsTextChanged] = useToggle();

  return(
        <button id='button' onClick={setIsTextChanged}></button>
    );
}


export default App;
