import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(response =>response.json())
        .then(apiData => setProducts(apiData))
    },[])
  return (
    <div className='shop-container'>
        <div className="products-container">
           {
            products.map( product => <Product 
              key={product.id}
              product={product}
               /> )
           } 
        </div>
        <div className="cart-container">

        </div>
    </div>
  )
}

export default Shop