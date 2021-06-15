const express = require("express");
const books = require("./data");
const app = express();

app.listen(8000);
app.get("/books", (req, res) => {
  res.json(books);
});
