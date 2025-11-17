const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require("../middleware/authMiddleware");

// 🔐 현재 로그인된 사용자 정보 반환
router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("email username address");
    if (!user) return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "사용자 조회 실패", error: err });
  }
});

// 📝 회원가입
router.post('/signup', async (req, res) => {
  const { email, username, phone, password, address } = req.body;
  console.log("📦 회원가입 요청 데이터:", req.body);

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: '이미 존재하는 사용자입니다.' });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, phone, password: hashed, address });
    await newUser.save();

    res.status(201).json({ message: '회원가입 성공' });
  } catch (err) {
    res.status(500).json({ message: '회원가입 처리 중 오류 발생', error: err });
  }
});

// 🔑 로그인
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: '로그인 성공', token, username: user.username }); // ✅ phone 반환
  } catch (err) {
    res.status(500).json({ message: '서버 오류', error: err });
  }
});

module.exports = router;
