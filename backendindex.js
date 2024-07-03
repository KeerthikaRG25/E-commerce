const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', authenticateToken, ordersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
