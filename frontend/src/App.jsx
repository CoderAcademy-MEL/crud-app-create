import React from 'react';
import Router from './Router';
import axios from 'axios';

class App extends React.Component {
  state = {
    products: null
  }

  formSubmit = async (product, history) => {
    try {
      const products = await axios.post("http://localhost:5000/products", product)
      this.setState({
        products: products.data
      }, () => {
        history.push("/")
      })
    } catch(err) {
      console.log(err)
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/products")
    const products = await response.json()
    this.setState({
      products
    })
  }
  
  render() {
    return this.state.products ? <Router products={this.state.products} formSubmit={this.formSubmit} /> : null
  }
}

export default App;
