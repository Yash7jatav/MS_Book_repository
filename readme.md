# Book Repository API

## 📌 Overview

The **Book Repository API** allows users to manage books, create reading lists, and perform CRUD operations on books and users. This system is designed to help users add, search, and update books, as well as manage their reading progress. The API also supports adding books to reading lists and updating the status of the books, such as **Want to Read**, **Reading**, or **Finished**.

## 🚀 Features

✅ **User Management**: Create users with unique usernames and emails.  
✅ **Book Repository**: Add books with details like title, author, genre, and publication year.  
✅ **Search Functionality**: Search for books by title or author.  
✅ **Reading List Management**: Users can add books to their reading list, update their status, and remove books.  
✅ **Book Update**: Modify details of a book (e.g., title and genre).  
✅ **Integration with Database**: All information is managed in a SQLite database using Sequelize ORM.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** SQLite (Sequelize ORM)
- **Authentication & Validation:** Custom validation and error handling
- **Testing:** Jest
- **Deployment:** Render

---

## 📢 API Endpoints

### **User Routes**

| Method   | Endpoint     | Description    |
| -------- | ------------ | -------------- |
| **POST** | `/api/users` | Add a new user |

### **Book Routes**

| Method   | Endpoint             | Description                         |
| -------- | -------------------- | ----------------------------------- |
| **POST** | `/api/books`         | Add a new book                      |
| **GET**  | `/api/books/search`  | Search for books by title or author |
| **POST** | `/api/books/:bookId` | Update book details                 |

### **Reading List Routes**

| Method   | Endpoint                           | Description                         |
| -------- | ---------------------------------- | ----------------------------------- |
| **POST** | `/api/reading-list`                | Add a book to a user's reading list |
| **GET**  | `/api/reading-list/:userId`        | Get a user's reading list           |
| **POST** | `/api/reading-list/:readingListId` | Remove a book from the reading list |

---

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Yash7jatav/BookRepositoryBackend.git
   cd BookRepositoryBackend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and add:

   ```env
   PORT=5000
   ```

4. **Run the server:**

   ```sh
   npm start
   ```

   The API will be running on `http://localhost:5000`

5. **Run tests:**
   ```sh
   npm test
   ```

---

## 📌 Usage Instructions

- Use tools like **Postman** or **cURL** to test API endpoints.
- Include authentication tokens in headers for protected routes (if applicable).

---

## 🌱 Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

✨ **Author**  
👨‍💻 Yash Jatav  
🔗 GitHub: [Yash7jatav](https://github.com/Yash7jatav)
