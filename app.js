const express = require("express");
const cors = require("cors");

//Routers.
const homeRouter = require("./routes/home.route");
const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");
const readingListRouter = require("./routes/readingList.route");

const app = express();

app.use(express.json());
app.use(cors());

//Routes.
app.use("/", homeRouter);
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/reading-list", readingListRouter);

module.exports = app;
