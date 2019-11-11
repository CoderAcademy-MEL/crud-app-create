const express = require('express');
const router = express.Router();

const { index, create, destroy } = require('../controllers/products-controller');

router.get('/', index);
router.post('/', express.json(), create, index);
router.delete('/', destroy)

module.exports = router;