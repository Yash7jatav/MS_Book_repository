const express = require("express");
const { ReadingList, Book, User } = require("../models");
const {
  addToReadingList,
  getUserByReadingList,
  removeBookFromReadingList,
} = require("../controllers/index");
const {
  validateIdsAndStatus,
  validateUserId,
  validateReadingListId,
} = require("../validations/index");
const router = express.Router();

//MS1_Assessment_1.4: Managing Reading List.
router.post("/", async (req, res) => {
  try {
    const readingListData = req.body;
    const error = await validateIdsAndStatus(readingListData);

    if (error) return res.status(400).json({ error });

    const readingList = await addToReadingList(readingListData);
    return res.status(201).json(readingList);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//MS1_Assessment_1.6:  Get the User's Reading List.
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const error = await validateUserId(userId);

    if (error) return res.status(404).json({ error });

    const readingList = await getUserByReadingList(userId);
    return res.status(200).json(readingList);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//MS1_Assessment_1.7:  Remove a Book from the Reading List.
router.post("/remove", async (req, res) => {
  try {
    const readingListId = req.body.id;
    const error = await validateReadingListId(readingListId);

    if (error) return res.status(404).json({ error });

    const removeBook = await removeBookFromReadingList(readingListId);
    return res.status(200).json(removeBook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
