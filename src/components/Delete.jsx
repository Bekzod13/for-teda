import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Api from "../api/Api";
import Context from "../context/Context";


const Delete = () => {

    const navigate = useNavigate();
    const {deleteId, setDeleteId} = useContext(Context);

    const deleteItem = () =>{
        Api.delete(`product/${deleteId}`);
        setDeleteId('');
        navigate('/');
    }

    const cencel = () => {
        navigate('/');
    }

  return (
    <div className="delete">
        <div className="delete-box">
            <h1>Confirm delete</h1>
            <div className="delete-actions">
                <div className="delete-confirm cencel" onClick={cencel}>Cencel</div>
                <div className="delete-confirm delete-btn" onClick={deleteItem}>Delete</div>
            </div>
        </div>
    </div>
  )
}

export default Delete