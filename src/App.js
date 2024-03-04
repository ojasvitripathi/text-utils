import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alerts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      // setInterval(() => {
      //   document.title =
      //     'Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title =
      //     'Install TextUtils Now';
      // },
      //   1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text you want to analyze below:" />}></Route>
        <Route path="/about" element={<About mode={mode}/>}></Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;