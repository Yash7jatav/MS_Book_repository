const express = require("express");
const { addUser } = require("../controllers/index");
const { validateUser } = require("../validations/index");
const router = express.Router();

//MS1_Assessment_1.1: Adding Users.
router.post("/", async (req, res) => {
  try {
    const newUserData = req.body;
    const error = validateUser(newUserData);

    if (error) return res.status(400).json({ error });

    const newUser = await addUser(newUserData);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
