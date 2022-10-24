import { useContext, useState } from 'react';
import Title from './Title';
import Api from '../api/Api';
import {useNavigate} from 'react-router-dom';
import Context from '../context/Context';


// import icons
import {TiCamera} from 'react-icons/ti';

const Create = () => {

    const navigate = useNavigate();
    const date = new Date();
    const {categories, brands} = useContext(Context);

    const [newProduct, setNewProduct] = useState({
        id: date.getTime(),
        name: '',
        description: '',
        categoryId: '',
        brandId: '',
        measurementId: {},
        brand: {id: date.getTime(), name: ''},
        discount: 0,
        photos: [],
        priceList: [],
        codeList: []
    });

    const addProduct = (e) => {
        e.preventDefault();

        Api.post('product', newProduct)


        // navigate("/");

        console.log(
            newProduct
            );
    };


  return (
    <div classNmae='container'>
        <Title title={'Create New Product'} />
        <form action="" className='create' onSubmit={addProduct}>
            <div className="form-box">
                <div className="input-for-img">
                    <label htmlFor="img" className='add-img-box'>
                        <TiCamera/>
                    </label>
                    <input type="file" 
                        multiple="true" 
                        className='add-img-hidden' 
                        onChange={e=>setNewProduct({...newProduct, photos: e.target.files })} />
                </div>
                <input type="text" placeholder='Name' className="add-input"   
                    onChange={e=>setNewProduct({...newProduct, name: e.target.value })}  />
            </div>
            <div className="form-box">
                <select onChange={e=>setNewProduct({...newProduct, categoryId: e.target.value })}>
                    {
                        categories.map(item=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                <select onChange={e=>setNewProduct({...newProduct, brandId: e.target.value })}>
                    {
                        brands.map(item=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                {/* <input type="text" placeholder='Category' className="add-input"
                     onChange={e=>setNewProduct({...newProduct, category: e.target.value })}  /> */}
                <input type="text" placeholder='Description' className="add-input"
                     onChange={e=>setNewProduct({...newProduct, description: e.target.value })}  />
            </div>
            <div className="form-box">
                <input type="text" placeholder='Price' className="add-input"
                     onChange={e=>setNewProduct({...newProduct, priceList: [e.target.value] })}  />
                <input type="text" placeholder='Real Price' className="add-input" 
                     onChange={e=>setNewProduct({...newProduct, priceList: [e.target.value]})} />
            </div>
            <button className='add-btn-save' type="submit">Save</button>
        </form>
    </div>
  )
}

export default Create