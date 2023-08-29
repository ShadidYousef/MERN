import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
    
const ProductList= () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then(res=>{
                console.log("dd")
                setAllProducts(res.data.products);
                console.log(res.data);
            }
                )       
    },allProducts);
    return (
        <div>
            {allProducts.map( (product, i) =>
                <p key={i}>{product.title}, {product.price}, {product.description}</p>
            )}
        </div>
    )
}
    
export default ProductList;