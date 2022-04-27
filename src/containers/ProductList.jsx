import React from 'react'
import { ProductItem } from '@components/ProductItem';
import { Loading } from '@components/Loading';
import '@styles/ProductList.scss'
import { useGetProduct } from '@hooks/useGetProduct';
const API = 'https://fakestoreapi.com/products/';
  
export const ProductList = () => {
  const {products, loading} = useGetProduct(API);
  
  return (
    <section className="main-container">
        <div className="ProductList">
            {loading ? (
              <div>
                <Loading/>
              </div>
            ) : (
              products.map(product => (
                <ProductItem key={product.id} product={product} />
              ))
            )}
        </div>
    </section>
  )
};

