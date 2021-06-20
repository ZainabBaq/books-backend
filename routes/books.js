const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBook,
  deleteBook,
} = require("../controller/booksController");

router.get("/", getBooks);

router.post("/", createBook);

router.delete("/:bookId", deleteBook);

module.exports = router;
