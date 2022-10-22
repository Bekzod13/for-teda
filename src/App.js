import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Context from "./context/Context";



function App() {

  const [dark, setDark] = useState(false);
  const [token, setToken] = useState( localStorage.getItem('token') || "");

  dark ? (document.body.className = 'dark') : (document.body.className = '');

  const contextValue ={
    token,
    setToken,
    dark, 
    setDark
  };

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {
            token !== '' ? (
            <Route path="/" element={<Home/>} />
            )
            :
            <Route path="*" element={<Login/>} />
          }
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
