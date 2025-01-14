import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Header from './Header'

function Homepage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data);
            setProducts(res.data)
        }).catch((err) => {
            console.log(err);

        })
    }, [])
    return (
        <>
            <Header />
            <div className='container'>
                <h1>Products</h1>
                <div className='row g-3'>
                    {
                        products.map((product) => (
                            <div className="col-md-6 col-lg-3">
                                <ProductCard item={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Homepage
