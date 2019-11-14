import React from 'react';
import axios from 'axios';

class EditProduct extends React.Component {
  state = {
    product: null
  }

  async componentDidMount() {
    const product = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${this.props.match.params.id}`)
    this.setState({
      product: product.data
    })
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = async (e) => {
    e.preventDefault()
    const { name, price } = this.state
    await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/products/${this.props.match.params.id}`, { name, price })
    this.props.history.push(`/${this.props.match.params.id}`)
  }


  render() {
    const { product } = this.state
    return this.state.product ? 
      (
        <div>
          <h1>on edit page</h1>
          <form onSubmit={this.onFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" id="name" defaultValue={product.name} onChange={this.onInputChange} />
            <label>Price</label>
            <input type="text" name="price" id="price" defaultValue={product.price} onChange={this.onInputChange} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      ) : null
  }
}

export default EditProduct;