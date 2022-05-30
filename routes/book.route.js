const { Router } = require("express");
const { booksController } = require("../controllers/book.controller");
const router = Router();

router.post("/books", booksController.postBook);
router.patch("/books/:id", booksController.patchBook);
router.delete("/books/:id", booksController.deleteBook);
router.get("/books", booksController.getBooks);
router.get("/books/:id", booksController.getBookById);
router.get("/books/genres/:id", booksController.getBookByGenre);

module.exports = router;
