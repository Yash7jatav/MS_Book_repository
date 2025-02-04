const express = require("express");
const { addUser, getAllUsers, deletedUsers } = require("../controllers/index");
const { validateUser } = require("../validations/index");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await getAllUsers();
  return res.status(200).json(users);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await deletedUsers(id);
  return res.status(200).json(deletedUser);
});

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
