const req = require("express/lib/request");
const { model } = require("mongoose");
const Genre = require("../models/genre.model");

module.exports.genreController = {
  postGenre: (req, res) => {
    Genre.create({
      name: req.body.name,
      about: req.body.about,
    })
      .then(() => {
        res.json("добавлено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("удалено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getGenres: (req, res) => {
    Genre.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};
