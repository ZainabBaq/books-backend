const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} = require("../controller/booksController");

router.get("/", getBooks);

router.post("/", createBook);

router.delete("/:bookId", deleteBook);

router.put("/:bookId", updateBook);

module.exports = router;
