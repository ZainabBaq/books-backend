const slugify = require("slugify");
let books = require("../data");

exports.getBooks = (req, res) => {
  res.json(books);
};

exports.createBook = (req, res) => {
  const id = books[books.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newBook = { id, slug, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.deleteBook = (req, res) => {
  const { bookId } = req.params;
  const foundBook = books.find((book) => book.id === +bookId);
  if (foundBook) {
    books = books.filter((book) => book.id !== +bookId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "book not found" });
  }
};
