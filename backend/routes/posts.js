const router = require("express").Router();
const multer = require("multer");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const post = new Post({
      userId: req.user.id,
      username: req.body.username,
      image: req.file.path,
      caption: req.body.caption
    });

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
