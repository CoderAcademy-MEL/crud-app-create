// models
const Product = require('../models/Product');

const index = async (req, res) => {
  res.send(await Product.find())
}

const show = async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.send(product)
}

const create = async (req, res) => {
  const newProduct = await Product.create(req.body)
  res.send(newProduct)
}

const edit = async (req, res) => {
  const { id } = req.params
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true})
  res.send(updatedProduct)
} 

const destroy = async (req, res) => {
  try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.send({
      message: "deleted successfully"
    })
  } catch(err) {
    res.status(500).send(err)
  }
}

module.exports = {
  index,
  create,
  show,
  destroy,
  edit
}