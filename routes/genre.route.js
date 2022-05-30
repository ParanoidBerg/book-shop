const { Router } = require("express");
const { authorController } = require("../controllers/author.controller");
const { genreController } = require("../controllers/genre.controller");
const router = Router();

router.post("/genres", genreController.postGenre);
router.delete("/genres/:id", genreController.deleteGenre);
router.get("/genres", genreController.getGenres);
router.post("/authors", authorController.postAuthor)

module.exports = router;
