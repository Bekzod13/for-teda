import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Api from './api/Api';


// import pages
import Home from "./components/Home";
import Login from "./components/Login";

// import component
import Navbar from "./components/Navbar";

function App() {

  const [products, setProducts] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  const [dark, setDark] = useState(false);
  const [token, setToken] = useState( localStorage.getItem('token') || "");

  dark ? (document.body.className = 'dark') : (document.body.className = '');

  useEffect(()=>{
    const getProducts = async () =>{
      const response = await Api.get('product').then(res=>{
      setProducts(res.data.data);
      })
      .catch(err=>{
        console.log(err);
      })
      return response;
    }
    getProducts();
  },[]);

  console.log(products);


  const contextValue ={
    token,
    setToken,
    dark, 
    setDark,
    products,
    deleteId, 
    setDeleteId
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
