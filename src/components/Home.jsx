import { useContext } from 'react';
import Context from '../context/Context';
import {useNavigate, Link} from 'react-router-dom';


// import component
import Title from './Title';

// import icons
import {BsTrash} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';

const Home = () => {
  
  const navigate = useNavigate();
  const baseUrl = 'https://profitmodel-server.herokuapp.com/api/';
  const {products, setDeleteId} = useContext(Context);
  
  const deleteProduct = (id) => {
    navigate('/delete')
    setDeleteId(id);
  }


  return (
    <>
      <Title title={"Dashboard"} />
      <div className='container home-table'>
        <Link to='/create' className="new-product">Add Product</Link>
        {
          products.length === 0 ? <h1>No Products</h1>:
          products.map((item, index)=>(
            <div className="home-item" key={item.id}>
              <div className="home-item-img">
                <img src={`${baseUrl}product/${item.id}/photo/${item.id * 2 - 1}`} alt={item.name} />
              </div>
              <div className="home-item-title">{item.name}</div>
              <div className="home-item-price">${item.priceList[0].realPrice}</div>
              <div className="home-item-actions">
                <div className="home-item-delete" onClick={()=>deleteProduct(item.id)}><BsTrash/></div>
                <div className="home-item-edit"><BiEdit/></div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home