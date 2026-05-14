const router = require("express").Router();
const Message = require("../models/Message");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const message = new Message({
      sender: req.user.id,
      receiver: req.body.receiver,
      text: req.body.text
    });

    await message.save();
    res.json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:user1/:user2", async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.params.user1, receiver: req.params.user2 },
        { sender: req.params.user2, receiver: req.params.user1 }
      ]
    });

    res.json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
