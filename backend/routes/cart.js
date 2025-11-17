const express = require('express');
const router = express.Router();
const CartItem=require('../models/CartItem');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/authMiddleware');

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "토큰 없음" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "인증 실패" });
  }
}

// ✅ 사용자별 장바구니 조회
router.get('/', authenticate, async (req, res) => {
  try {
    const items = await CartItem.find({ userId: req.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: '조회 실패', error: err });
  }
});

// ✅ 장바구니에 추가
router.post('/', authenticate, async (req, res) => {
  try {
    const { id, name, price, quantity, image } = req.body;
    let item = await CartItem.findOne({ userId: req.userId, id });

    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      item = new CartItem({ userId: req.userId, id, name, price, quantity, image });
      await item.save();
    }

    const updatedCart = await CartItem.find({ userId: req.userId });
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: '추가 실패', error: err });
  }
});

// ✅ 수량 증가
router.put('/:id/increase', authenticate, async (req, res) => {
  try {
    const item = await CartItem.findOne({ userId: req.userId, id: req.params.id });
    if (item) {
      item.quantity += 1;
      await item.save();
      const updatedCart = await CartItem.find({ userId: req.userId });
      res.json(updatedCart);
    } else {
      res.status(404).json({ message: '상품을 찾을 수 없음' });
    }
  } catch (err) {
    res.status(500).json({ message: '수량 증가 실패', error: err });
  }
});

// ✅ 수량 감소
router.put('/:id/decrease', authenticate, async (req, res) => {
  try {
    const item = await CartItem.findOne({ userId: req.userId, id: req.params.id });
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        await item.save();
      } else {
        await CartItem.deleteOne({ userId: req.userId, id: req.params.id });
      }
      const updatedCart = await CartItem.find({ userId: req.userId });
      res.json(updatedCart);
    } else {
      res.status(404).json({ message: '상품을 찾을 수 없음' });
    }
  } catch (err) {
    res.status(500).json({ message: '수량 감소 실패', error: err });
  }
});

// ✅ 수량 직접 수정
router.put('/:id', authenticate, async (req, res) => {
  try {
    const item = await CartItem.findOne({ userId: req.userId, id: req.params.id });
    if (item) {
      item.quantity = req.body.quantity;
      await item.save();
      const updatedCart = await CartItem.find({ userId: req.userId });
      res.json(updatedCart);
    } else {
      res.status(404).json({ message: '상품을 찾을 수 없음' });
    }
  } catch (err) {
    res.status(500).json({ message: '수량 수정 실패', error: err });
  }
});

// ✅ 장바구니 삭제
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await CartItem.deleteOne({ userId: req.userId, id: req.params.id });
    const updatedCart = await CartItem.find({ userId: req.userId });
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: '삭제 실패', error: err });
  }
});

module.exports = router;