const express = require("express");
const books = require("./routes/books");

const app = express();
app.use(express.json());
app.use("/books", books);
app.listen(8000);
