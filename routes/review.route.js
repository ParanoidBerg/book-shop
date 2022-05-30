const { Router } = require("express");
const { reviewController } = require("../controllers/review.controller");
const router = Router();

router.post("/reviews", reviewController.postReview);
router.delete("/reviews/:id", reviewController.deleteReview);
router.get("/reviews/:id", reviewController.getReviewByBook);

module.exports = router;
