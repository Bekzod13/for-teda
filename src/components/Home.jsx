// import axios from 'axios';
import {useEffect, useState} from 'react'
import Api from '../api/Api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    Api.get('product')
      .then(res=>{
        setProducts(res.data.data)
      })
      .catch(err=>{
        console.log(err);
      })
  },[]);

  console.log(products);

  return (
    <>
    <h1 className="text-center">Dashboard</h1>
    <div className='container'>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length === 0 ? 
            <h2>No items</h2>:
            products.map(item=>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={`https://profitmodel-server.herokuapp.com/api/product/${item.id}/photo/${item.id * 2}`} style={{width:"100px", height:"100px", objectFit:'contain'}} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>${item.priceList[0].price}</td>
                <td>
                  <button type="button" class="btn btn-success">Edit</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home