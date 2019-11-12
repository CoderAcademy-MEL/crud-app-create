import React from 'react';
import Router from './Router';
import axios from 'axios';
import './global.css';

class App extends React.Component {
  state = {
    products: null
  }

  formSubmit = async (product, history) => {
    try {
      const newProduct = await axios.post("http://localhost:5000/products", product)
      this.setState((prevState) => ({
        products: [...prevState.products, newProduct.data] 
      }), () => {
        history.push("/")
      })
    } catch(err) {
      console.log(err)
    }
  }

  handleProductDelete = async (id, history) => {
    await axios.delete(`http://localhost:5000/products/${id}`)
    this.setState((prevState) => ({
      products: prevState.products.filter((product) => id !== product._id)  
    }), () => {
      history.push("/")
    })  
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/products")
    const products = await response.json()
    this.setState({
      products
    })
  }
  
  render() {
    return this.state.products ? <Router products={this.state.products} formSubmit={this.formSubmit} handleProductDelete={this.handleProductDelete} /> : null
  }
}

export default App;
