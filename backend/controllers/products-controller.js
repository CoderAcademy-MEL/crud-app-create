// models
const Product = require('../models/Product');

const index = async (req, res) => {
  res.send(await Product.find())
}

const create = async (req, res, next) => {
  const newProduct = await Product.create(req.body)
  next()
}

const destroy = async (req, res) => {
  await Product.deleteMany()
  res.send('all products deleted')
}

module.exports = {
  index,
  create,
  destroy
}