const express = require("express");
const books = require("./routes/books");
const db = require("./db/models");
const cors = require("cors");
const path = require("path");

const app = express();
// Midleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/books", books);
app.use("/media", express.static("media"));
app.use("/media", express.static(path.join(__dirname, "media")));

db.sequelize.sync();

app.use((req, res, next) => {
  res.status(404).json({ message: "page do not exist/ invalid url" });
});
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server Error" });
});

app.listen(8000);
