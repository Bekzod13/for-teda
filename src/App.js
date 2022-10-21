import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Context from "./context/Context";



function App() {

  const [token, setToken] = useState( localStorage.getItem('token') || "")


  
  const contextValue ={
    token,
    setToken
  };

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {
            token !== '' ? 
            <Route path="/" element={<Home/>} />:
            <Route path="*" element={<Login/>} />
          }
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
