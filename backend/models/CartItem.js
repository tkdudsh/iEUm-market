const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },  
  id: String,
  name: String,
  price: Number,
  quantity: Number,
  image: String
});

module.exports = mongoose.model('CartItem', cartItemSchema);
