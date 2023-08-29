import React, { useEffect, useState } from 'react'
import axios, { formToJSON } from 'axios';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductFrom'
export default () => {
    const [ message, setMessage ] = useState("Loading...")

    
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}






