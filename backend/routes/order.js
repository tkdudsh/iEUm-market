const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, async (req, res) => {
  try {
    const { items } = req.body;
    const newOrder = new Order({
      userId: req.userId,
      items
    });
    await newOrder.save();
    res.status(201).json({ message: "주문 완료", orderId: newOrder._id });
  } catch (err) {
    res.status(500).json({ message: "주문 실패", error: err });
  }
});
router.get("/", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "주문 조회 실패", error: err });
  }
});

module.exports = router;