const express = require("express");
const upload = require("../middleware/multer");
const {
  getLibraries,
  createLibrary,
  fetchLibrary,
  createBook,
} = require("../controller/librariesController");

const router = express.Router();

router.param("libraryId", async (req, res, next, libraryId) => {
  const library = await fetchLibrary(libraryId, next);
  if (library) {
    req.library = library;
    next();
  } else {
    const err = new Error("Library not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getLibraries);

router.post("/", upload.single("img"), createLibrary); /// img is the name of the field in the model

router.post("/:libraryId/books", upload.single("img"), createBook); /// img is the name of the field in the model

// router.delete("/:libraryId", deleteLibrary);

// router.put("/:libraryId", upload.single("img"), updateLibrary);

module.exports = router;
