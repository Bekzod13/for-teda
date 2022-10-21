import axios from "axios";

// base url
const baseUrl = 'https://profitmodel-server.herokuapp.com/api/';

const Api = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
    }
});

export default Api;