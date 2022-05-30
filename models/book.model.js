const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  name: String,
  author: {
    ref: "Author",
    type: mongoose.SchemaTypes.ObjectId,
  },
  genre: {
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Book = mongoose.model("Book", booksSchema);
module.exports = Book;
