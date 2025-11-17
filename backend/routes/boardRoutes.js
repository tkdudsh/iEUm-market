const express = require("express");
const router = express.Router();
const BoardPost = require("../models/BoardPost"); // ✅ 모델 import

// ✅ 게시글 등록
router.post("/", async (req, res) => {
  const { title, content, writer } = req.body;
  if (!title || !content) return res.status(400).json({ message: "필수 항목 누락" });

  try {
    const newPost = new BoardPost({ title, content, writer: writer || "익명" });
    await newPost.save();
    res.status(201).json({ message: "게시글 등록 성공", post: newPost });
  } catch (err) {
    res.status(500).json({ message: "DB 저장 실패", error: err });
  }
});

// ✅ 전체 게시글 불러오기
router.get("/", async (req, res) => {
  try {
    const posts = await BoardPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "게시글 조회 실패", error: err });
  }
});

// ✅ 게시글 상세 조회
router.get("/:id", async (req, res) => {
  try {
    const post = await BoardPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "게시글 없음" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "상세 조회 실패", error: err });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await BoardPost.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "삭제할 게시글이 없습니다." });
    res.json({ message: "게시글이 삭제되었습니다." });
  } catch (err) {
    res.status(500).json({ message: "삭제 실패", error: err });
  }
});
module.exports = router;