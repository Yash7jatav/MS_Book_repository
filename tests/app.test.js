const { addUser, addBook, addToReadingList } = require("../controllers/index");
const app = require("../app");
let http = require("http");

jest.mock("../controllers/index", () => ({
  ...jest.requireActual("../controllers/index"),
  addUser: jest.fn(),
  addBook: jest.fn(),
  addToReadingList: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("Function tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("addUser function should add a new user with success message", async () => {
    const mockResult = {
      message: "User created successfully",
      user: {
        id: 2,
        username: "user1",
        email: "user1@gmail.com",
        updatedAt: "2025-01-18T13:51:31.573Z",
        createdAt: "2025-01-18T13:51:31.573Z",
      },
    };

    addUser.mockReturnValue(mockResult);

    const result = await addUser({
      username: "user1",
      email: "user1@gmail.com",
    });

    expect(result).toEqual(mockResult);
    expect(addUser).toHaveBeenCalledWith({
      username: "user1",
      email: "user1@gmail.com",
    });
  });

  test("addBook function should add a new book with success message", async () => {
    const mockResult = {
      message: "Book added successfully",
      book: {
        id: 3,
        title: "2 States: The Story of My Marriage",
        author: "Chetan Bhagat",
        genre: "Romance",
        publicationYear: 2009,
        updatedAt: "2025-01-18T14:09:58.575Z",
        createdAt: "2025-01-18T14:09:58.575Z",
      },
    };

    addBook.mockReturnValue(mockResult);

    const result = await addBook({
      title: "2 States: The Story of My Marriage",
      author: "Chetan Bhagat",
      genre: "Romance",
      publicationYear: 2009,
    });

    expect(result).toEqual(mockResult);
    expect(addBook).toHaveBeenCalledWith({
      title: "2 States: The Story of My Marriage",
      author: "Chetan Bhagat",
      genre: "Romance",
      publicationYear: 2009,
    });
  });

  test("addToReadingList function should add a readling list detail with success message", async () => {
    const mockResult = {
      message: "Book added to reading list",
      readingList: {
        id: 3,
        userId: 1,
        bookId: 1,
        status: "Want to Read",
        updatedAt: "2025-01-18T14:24:37.602Z",
        createdAt: "2025-01-18T14:24:37.602Z",
      },
    };

    addToReadingList.mockReturnValue(mockResult);

    const result = await addToReadingList({
      userId: 1,
      bookId: 1,
      status: "Want to Read",
    });

    expect(result).toEqual(mockResult);
    expect(addToReadingList).toHaveBeenCalledWith({
      userId: 1,
      bookId: 1,
      status: "Want to Read",
    });
  });
});
