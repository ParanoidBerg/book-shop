const Author = require("../models/author.model");

module.exports.authorController = {
  postAuthor: (req, res) => {
    Author.create({
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
};
