import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(response =>response.json())
        .then(apiData => setProducts(apiData))
    },[]);
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) =>{
      const newCart = [...cart,product]
      setCart(newCart);
    }
  return (
    <div className='shop-container'>
        <div className="products-container">
           {
            products.map( product => <Product 
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
               /> )
           } 
        </div>
        <div className="cart-container">
           <h4>Order Summary</h4>
           <p>Selected Items: {cart.length}</p>
        </div>
    </div>
  )
}

export default Shop