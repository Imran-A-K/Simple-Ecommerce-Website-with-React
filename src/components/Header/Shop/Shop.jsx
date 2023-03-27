import React, { useEffect, useState } from 'react'
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

        </div>
        <div className="cart-container">

        </div>
    </div>
  )
}

export default Shop