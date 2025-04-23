const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/product');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/product', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
