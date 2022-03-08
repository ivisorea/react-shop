import axios from "axios";
import { useState, useEffect } from "react";

export const useGetProduct = (API) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(async() => {
        try {
            const { data } = await axios.get(API);
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
      
    }, [API]);
   
    return { products, loading };
};