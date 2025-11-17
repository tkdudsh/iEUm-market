const express = require('express');
const router = express.Router();
const products = require('../data/products');

// GET /api/products → 전체 상품 리스트 응답
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
