import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  state = {
    product: null
  }

  async componentDidMount() {
    const product = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${this.props.match.params.id}`)
    this.setState({
      product: product.data
    })
  }

  onButtonClick = (e) => {
    this.props.handleProductDelete(this.props.match.params.id, this.props.history)
  }

  render() {
    const { product } = this.state
    return product ? (
      <>
        <h1>{product.name}</h1>  
        <h2>${product.price}</h2>
        <button onClick={this.onButtonClick}>Delete</button>
        <div style={{ margin: "10px 0px"}}>
          <Link to={`/edit/${this.props.match.params.id}`}>Update product</Link>
        </div>
      </>
    ) : (
      null
    )
  }
}

export default Product;