import axios from "axios";
import { useState, useEffect } from "react";

export const useGetProduct = (API) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        try{
            const fetchData = async () => {
                const result = await axios(API);
                setProducts(result.data);
                setLoading(false);
            };
            fetchData();
        } catch(error){
            console.log(error);
        }
    }, [API]);

    
   
    return { products, loading };
};