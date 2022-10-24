import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Api from './api/Api';


// import pages
import Home from "./components/Home";
import Login from "./components/Login";
import Delete from "./components/Delete";
import Create from "./components/Create";

// import component
import Navbar from "./components/Navbar";

function App() {

  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  const [dark, setDark] = useState(false);
  const [token, setToken] = useState( localStorage.getItem('token') || "");

  dark ? (document.body.className = 'dark') : (document.body.className = '');

  useEffect(()=>{
    const getBrands = async () => {
      const response = await Api.get('brand').then(res=>{
        setBrands(res.data.data);
        })
        .catch(err=>{
          console.log(err);
        })
        return response;
    }
    const getCategories = async () => {
      const response = await Api.get('category').then(res=>{
        setCategories(res.data.data);
        })
        .catch(err=>{
          console.log(err);
        })
        return response;
    }
    const getProducts = async () =>{
      const response = await Api.get('product').then(res=>{
      setProducts(res.data.data);
      })
      .catch(err=>{
        console.log(err);
      })
      return response;
    }
    getBrands();
    getCategories();
    getProducts();
  },[]);


  const contextValue ={
    token,
    setToken,
    dark, 
    setDark,
    products,
    deleteId, 
    setDeleteId,
    categories,
    brands
  };

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {
            token !== '' ? <>
            <Route path="/" element={<Home/>} />
            <Route path="/delete" element={<Delete/>} />
            <Route path="/create" element={<Create/>} />
            </>
            :
            <Route path="*" element={<Login/>} />
          }
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
