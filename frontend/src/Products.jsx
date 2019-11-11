import React from 'react';

const Products = (props) => {
  return props.products.map((product, index) => {
    return (
      <div key={index}>
        <h1>Product name: {product.name}</h1>
        <h2>Product price: {product.price}</h2>
      </div>
    )
  })
}

export default Products;