import React, {useState} from 'react';
 import { ToastContainer, toast } from 'react-toastify';
 import { TiFlowSwitch } from "react-icons/ti";
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {

  const [value, setvalue] = useState('');
  const [isMaxLength, setisMaxLength] = useState(Infinity);
  const [isBinary, setisBinary] = useState(false);


  const notify = () => {
    toast('Definiton of binary in mathematics : a number system based only on the numerals 0 and 1', {
      draggable: true,
      autoClose: 2000,
      closeOnClick: true
    }); 
  }; 

  const convertToBase10 = (value) => {
     return parseInt(value, 2);
  }

  const valueHandler = (event) => {
    let notBinary = /[^01]/; 
     
    if(!notBinary.test(event.target.value) && event.target.value.length > 0) {
      setisBinary(true);
      setisMaxLength(Infinity);
      setvalue(event.target.value);
    } 
     else  {
      setisBinary(false);
      setisMaxLength(1);
      if (event.target.value.length > 0) {
        notify(); 
      }
      setvalue(event.target.value);
    }
     
  }


  return (
    <div className="App">
    <div className="container">
    <h2 className='title'>Bin2Dec</h2>
      <input type='text' value={value} autoFocus  onChange={valueHandler} maxLength={isMaxLength}  />
      <ToastContainer/> 
      <TiFlowSwitch className='icon' size='4rem' color='cornflowerblue' />
      <h1>{ isBinary ? convertToBase10(value) : 'type a binary and watch me' }</h1>
    </div>
    </div>
  );
}

export default App;
