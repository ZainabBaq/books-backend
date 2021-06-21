const express = require("express");
const books = require("./routes/books");
const db = require("./db/models");

const app = express();
app.use(express.json());
app.use("/books", books);
db.sequelize.sync({ force: true });
app.listen(8000);
