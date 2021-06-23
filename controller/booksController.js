const { Book } = require("../db/models");

exports.getBooks = async (req, res, next) => {
  try {
    const booksData = await Book.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(booksData);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

exports.fetchBook = async (bookId, next) => {
  try {
    const foundBook = await Book.findByPk(bookId); //2
    return foundBook;
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    await req.book.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    await req.book.update(req.body);
    res.status(201).json(req.book);
  } catch (error) {
    next(error);
  }
};

// exports.bookDetails = async (req,res,next)=>{
//   try{
//     res.status(201).json(req.book).end()
//   }
//   catch(error){
//     next(error);
//   }
// }
