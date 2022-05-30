const Review = require("../models/review.model");

module.exports.reviewController = {
  postReview: (req, res) => {
    Review.create({
      text: req.body.text,
      name: req.body.name,
      book: req.body.book,
    })
      .then(() => {
        res.json("добавлено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteReview: (req, res) => {
    Review.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("удалено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getReviewByBook: (req, res) => {
    Review.find({ book: req.params.id })
      .populate("book")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};
