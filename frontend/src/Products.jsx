import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
  return props.products.map((product, index) => {
    return (
      <Link to={`/${product._id}`} key={index} >
        <div style={{ border: "solid black" }}>
          <h1>Product name: {product.name}</h1>
          <h2>Product price: {product.price}</h2>
        </div>
      </Link>
    )
  })
}

export default Products;