const express = require('express');
const router = express.Router();

const { index, create, show, destroy, edit } = require('../controllers/products-controller');

router.get('/', index)
router.get('/:id', show)
router.post('/', express.json(), create);
router.patch('/:id', express.json(), edit);
router.delete('/:id', destroy)

module.exports = router;