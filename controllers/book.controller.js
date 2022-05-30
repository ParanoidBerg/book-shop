const Book = require("../models/book.model");

module.exports.booksController = {
  postBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    })
      .then(() => {
        res.json("добавлено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("удалено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    })
      .then(() => {
        res.json("изменено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getBooks: (req, res) => {
    Book.find()
      .populate("author")
      .populate("genre")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getBookById: (req, res) => {
    Book.findById(req.params.id)
      .populate("author")
      .populate("genre")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getBookByGenre: (req, res) => {
    Book.findById({ genre: req.params.id })
      .populate("author")
      .populate("genre")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};
