const express = require("express");
const { addBook, searchBooks, updateBook } = require("../controllers/index");
const { validateBook, validateBookId } = require("../validations/index");
const router = express.Router();

//MS1_Assessment_1.2: Adding Books.
router.post("/", async (req, res) => {
  try {
    const newBookData = req.body;
    const error = validateBook(newBookData);

    if (error) return res.status(400).json({ error });

    const newBook = await addBook(newBookData);
    return res.status(201).json(newBook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//MS1_Assessment_1.3: Searching for Books.
router.get("/search", async (req, res) => {
  try {
    const { title, author } = req.query;
    const books = await searchBooks(title, author);

    if (books.books.length === 0)
      return res.status(404).json({ error: "No books found." });

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//MS1_Assessment_1.5:Update Book Detail.
router.post("/:bookId", async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const dataToUpdate = req.body;
    const error = await validateBookId(bookId);

    if (error) return res.status(404).json({ error });

    const updatedBook = await updateBook(dataToUpdate, bookId);
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
