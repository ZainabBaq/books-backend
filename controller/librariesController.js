const { Book, Library } = require("../db/models");

exports.getLibraries = async (req, res, next) => {
  try {
    const librariesData = await Library.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Book,
        as: "books", // alias
        attributes: ["id"],
      },
    });
    res.json(librariesData);
  } catch (error) {
    next(error);
  }
};

exports.createLibrary = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.img = `http://${req.get("host")}/${req.file.path}`;
    }
    const newLibrary = await Library.create(req.body);
    res.status(201).json(newLibrary);
  } catch (error) {
    next(error);
  }
};

exports.fetchLibrary = async (libraryId, next) => {
  try {
    const foundLibrary = await Library.findByPk(libraryId); //2
    return foundLibrary;
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.img = `http://${req.get("host")}/${req.file.path}`;
    }
    // req.body.libraryId = req.params.libraryId;
    req.body.libraryId = req.library.id;
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

// exports.libraryDetails = async (req,res,next)=>{
//   try{
//     res.status(201).json(req.library).end()
//   }
//   catch(error){
//     next(error);
//   }
// }
