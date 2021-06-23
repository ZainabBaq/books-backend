const express = require("express");
const books = require("./routes/books");
const db = require("./db/models");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/books", books);
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
