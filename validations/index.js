const { User, Book, ReadingList } = require("../models");

//Validation functions.

function validateUser(newUserData) {
  if (!newUserData.username || typeof newUserData.username !== "string") {
    return "Username is required and must be a string.";
  }
  if (!newUserData.email || typeof newUserData.email !== "string") {
    return "Email is required and must be a string.";
  }
  return null;
}

function validateBook(newBookData) {
  if (!newBookData.title || typeof newBookData.title !== "string") {
    return "Title is required and must be a string.";
  }
  if (!newBookData.author || typeof newBookData.author !== "string") {
    return "Author is required and must be a string.";
  }
  if (!newBookData.genre || typeof newBookData.genre !== "string") {
    return "Genre is required and must be a string.";
  }
  if (
    !newBookData.publicationYear ||
    typeof newBookData.publicationYear !== "number"
  ) {
    return "Publication year is required and must be a valid number.";
  }
  return null;
}

async function validateBookId(bookId) {
  const book = await Book.findByPk(bookId);
  if (!book) {
    return "Book not found";
  }
  return null;
}

async function validateIdsAndStatus(readingListData) {
  const book = await Book.findOne({ where: { id: readingListData.bookId } });
  const user = await User.findOne({ where: { id: readingListData.userId } });
  if (!book || !user) {
    return "Invalid user or book ID";
  }

  const allowedStatuses = ["Want to Read", "Reading", "Finished"];
  if (
    !readingListData.status ||
    !allowedStatuses.includes(readingListData.status)
  ) {
    return "Status must be one of 'Want to Read', 'Reading', or 'Finished'.";
  }

  return null;
}

async function validateUserId(userId) {
  const user = await User.findByPk(userId);
  if (!user) {
    return "User not found or no books in reading list";
  }
  return null;
}

async function validateReadingListId(readingListId) {
  const readingList = await ReadingList.findByPk(readingListId);

  if (!readingList) return "Reading list entry not found";

  return null;
}

module.exports = {
  validateUser,
  validateBook,
  validateBookId,
  validateIdsAndStatus,
  validateUserId,
  validateReadingListId,
};
