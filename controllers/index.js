const { User, Book, ReadingList } = require("../models");

//Functions.

//Add new user.
async function addUser(newUserData) {
  const isEmailExist = await User.findOne({
    where: { email: newUserData.email },
  });

  if (isEmailExist) return { message: "Email already exists" };

  const user = await User.create(newUserData);
  return { message: "User created successfully", user };
}

//Get all users.
async function getAllUsers() {
  const result = await User.findAll();
  return result;
}

//Delete all users.
async function deletedUsers(id) {
  const result = await User.destroy({ where: { id } });
  return { message: "Deleted successfully.", result };
}

//Add new book.
async function addBook(newBookData) {
  const book = await Book.create(newBookData);
  return { message: "Book added successfully", book };
}

//Get all books.
async function getAllBooks() {
  const result = await Book.findAll();
  return result;
}

//Delete all users.
async function deletedBooks(id) {
  const result = await Book.destroy({ where: { id } });
  return { message: "Deleted successfully.", result };
}

//Searching books.
async function searchBooks(title, author) {
  const books = await Book.findAll({ where: { title, author } });
  return { books };
}

//Update book.
async function updateBook(dataToUpdate, bookId) {
  const bookDetails = await Book.findByPk(bookId);
  await bookDetails.set(dataToUpdate);
  const book = await bookDetails.save();
  return { message: "Book details updated successfully", book };
}

//Add readingList detail.
async function addToReadingList(readingListData) {
  const readingList = await ReadingList.create(readingListData);
  return { message: "Book added to reading list", readingList };
}

//User's Reading List.
async function getUserByReadingList(userId) {
  const readingLists = await ReadingList.findAll({ where: { userId } });
  const detailArray = [];
  for (let readingList of readingLists) {
    const detail = {
      id: readingList.id,
      userId: readingList.userId,
      status: readingList.status,
      books: await Book.findOne({ where: { id: readingList.bookId } }),
    };
    detailArray.push(detail);
  }
  return { readingList: detailArray };
}

//Remove book.
async function removeBookFromReadingList(readingListId) {
  const readingListDeleted = await ReadingList.destroy({
    where: { id: readingListId },
  });
  if (!readingListDeleted) {
    return {};
  }
  return { message: "Book removed from reading list" };
}

module.exports = {
  addUser,
  addBook,
  searchBooks,
  updateBook,
  addToReadingList,
  getUserByReadingList,
  removeBookFromReadingList,
  getAllUsers,
  deletedUsers,
  getAllBooks,
  deletedBooks,
};
