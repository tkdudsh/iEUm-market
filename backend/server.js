const express = require('express');
const cors = require('cors');
const productRoutes=require('./routes/products')
const cartRoutes = require("./routes/cart");
const boardRoutes=require("./routes/boardRoutes")
const mongoose=require('mongoose');
const authRoutes = require("./routes/auth");
const orderRoutes =require("./routes/order");
const app = express();
const PORT = 4000;

require("dotenv").config();


// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cart",cartRoutes);
app.use('/api/products', productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/board", boardRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  res.send('이음장터 백엔드 서버 작동 중!');
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB 연결 성공"))
  .catch((err) => console.error("❌ MongoDB 연결 실패:", err));


// 서버 시작
app.listen(PORT, () => {
  console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
