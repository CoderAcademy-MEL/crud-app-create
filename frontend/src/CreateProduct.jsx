import React from 'react';

class CreateProducts extends React.Component {
  state = {}

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.formSubmit(this.state, this.props.history)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" id="name" onChange={this.inputChange} />
        <label>Price</label>
        <input type="text" name="price" id="price" onChange={this.inputChange} />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default CreateProducts;