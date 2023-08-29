import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductFrom from './ProductFrom';
import {
    Link,
    Routes,
    Route
  } from "react-router-dom";
    
const ProductList= () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                console.log("dd")
                setAllProducts(res.data.products);
                console.log(res.data);
            }
                )       
    },allProducts);

    // const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log("trytughijihuytryghujhgy")
                // removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <ProductFrom></ProductFrom>
            {allProducts.map( (product, i) =>
                <p key={i}>  <Link to={"/product/" + product._id + "/edit"}>
                {product.title}
            </Link>                            , {product.price}, {product.description} <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button></p>
                
            )}
        </div>
    )
}
    
export default ProductList;