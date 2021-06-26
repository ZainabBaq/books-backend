const express = require("express");
const upload = require("../middleware/multer");
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
  fetchBook,
} = require("../controller/booksController");

const router = express.Router();

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

router.post("/", upload.single("img"), createBook); /// img is the name of the field in the model

router.delete("/:bookId", deleteBook);

router.put("/:bookId", upload.single("img"), updateBook);

module.exports = router;
