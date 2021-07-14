const express = require("express");
const upload = require("../middleware/multer");
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
  fetchBook,
} = require("../controller/booksController");
const { fetchLibrary } = require("../controller/librariesController");
const passport = require("passport");

const router = express.Router();

router.param("bookId", async (req, res, next, bookId) => {
  const book = await fetchBook(bookId, next);
  if (book) {
    const library = await fetchLibrary(book.libraryId, next);
    req.library = library;
    req.book = book;
    next();
  } else {
    const err = new Error("Book not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getBooks);

router.delete(
  "/:bookId",
  passport.authenticate("jwt", { session: false }),
  deleteBook
);

router.put(
  "/:bookId",
  passport.authenticate("jwt", { session: false }),
  upload.single("img"),
  updateBook
);

module.exports = router;
