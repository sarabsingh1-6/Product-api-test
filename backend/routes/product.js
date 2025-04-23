const express = require('express');
const router = express.Router();
const { productQueryValidator } = require('../validators/productValidator');

router.get('/', productQueryValidator, (req, res) => {
  const product = {
    id: "123",
    name: "Iphone 16",
    description: "256GB IOS 18 powerful A18 Bionic chip, and an additional 12MP telephoto lens",
    price: 99.000,
    inStock: true,
    rating: 4.5,
    categories: ["mobile", "apple"]
  };

  res.status(200).json(product);
});

module.exports = router;