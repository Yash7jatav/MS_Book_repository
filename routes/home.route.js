const express = require("express");
const router = express.Router();

const homePageData = {
  projectTitle: "Book Repository Backend",
  description:
    "This backend application allows users to manage books, search for books, and maintain a reading list.",
  endpoints: [
    { method: "POST", endpoint: "/api/users", description: "Add a new user" },
    { method: "POST", endpoint: "/api/books", description: "Add a new book" },
    {
      method: "GET",
      endpoint: "/api/books/search",
      description: "Search for books by title or author",
    },
    {
      method: "POST",
      endpoint: "/api/reading-list",
      description: "Add a book to a user's reading list",
    },
    {
      method: "POST",
      endpoint: "/api/books/:bookId",
      description: "Update book details",
    },
    {
      method: "GET",
      endpoint: "/api/reading-list/:userId",
      description: "Get a user's reading list",
    },
    {
      method: "POST",
      endpoint: "/api/reading-list/:readingListId",
      description: "Remove a book from the reading list",
    },
  ],
  technologyStack: ["Node.js", "Express.js", "Sequelize", "SQLite"],
  features: [
    "User management",
    "Book repository management",
    "Reading list functionality",
    "Input validation and error handling",
    "Testing with Jest",
  ],
};

//Home.
router.get("/", (req, res) => {
  res.status(200).json({ projectDetails: homePageData });
});

module.exports = router;
