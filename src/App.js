import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [modered,setModered]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==="light" ){
      setMode("dark");
      document.body.style.backgroundColor='#8899A6'
      showAlert("dark mode is enabled","success")
      // document.title='TextUtils-Dark mode';
      // setInterval(() => {
      //   document.title='TextUtils-yesss mode';

      // }, 500);
      // setInterval(() => {
      //   document.title='TextUtils-noooo mode';

      // }, 800);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='#FFFFFF'
      showAlert("Light mode is enabled","success")
      document.title='TextUtils-Light mode';
    }
  }
  const redMode=()=>{
    if(modered === "light"){
        setModered("dark");
        document.body.style.backgroundColor='#DC143C'
        showAlert("Red mode is enabled","success")
      }
    else{
      setModered("light");
      document.body.style.backgroundColor='#FFFFFF'
      showAlert("Light mode is enabled","success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode==='light'?'light':'dark'} toggleMode={toggleMode} redMode={redMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about">
            <About />
            </Route>
            <Route path="/">
            <TextForm showAlert={showAlert} heading="enter the text here to see the magic" mode={mode}/>
            </Route>
         </Routes> */}
          <Routes>
          <Route exact path="/" element={
          <TextForm showAlert={showAlert} heading="enter the text here to see the magic" mode={mode}/>
          }/>
          <Route exact path="/about" element={<About/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
         </Routes> 

         </div>
      </Router> 

    </>
  );
}

export default App;
