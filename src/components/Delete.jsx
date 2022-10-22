import Api from "../api/Api";


const Delete = () => {
    const baseUrl = 'https://profitmodel-server.herokuapp.com/api/';
    Api.delete(`product/${id}`);
  return (
    <div className="delete">
        <div className="delete-box"></div>
    </div>
  )
}

export default Delete