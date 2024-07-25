import axios from "axios";

const API_BASE_URL =  'https://fakestoreapi.com';

const getAllProducts = async () =>{
    try {
        const res = await axios.get(`${API_BASE_URL}/products?limit=10`);
        if (res) {
          const products = res.data;
          return { products };
        } else {
          throw console.log("loading data from API...");
        }
    } catch (error) {
       throw console.error('Error fetching products:', error);
    }
};

export default getAllProducts