const slugify = require("slugify");
const { Book } = require("../db/models");

exports.getBooks = async (req, res) => {
  try {
    const booksData = await Book.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(booksData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findByPk(bookId);
    if (foundBook) {
      await foundBook.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "book does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findByPk(bookId);
    if (foundBook) {
      await foundBook.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "book does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
