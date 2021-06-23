const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
  fetchBook,
} = require("../controller/booksController");

router.param("bookId", async (req, res, next, bookId) => {
  const book = await fetchBook(bookId, next);
  if (book) {
    req.book = book;
    next();
  } else {
    const err = new Error("Book not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getBooks);

router.post("/", createBook);

router.delete("/:bookId", deleteBook);

router.put("/:bookId", updateBook);

module.exports = router;
