const cartProductsLoader = async () =>{
    const loadedProducts = await fetch('products.json');
    const product = await loadedProducts.json();
    return product
}

export default cartProductsLoader;