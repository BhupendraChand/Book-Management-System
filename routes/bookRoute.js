const { noDoubleNestedGroup } = require('sequelize/lib/utils/deprecations')
const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } =
require('../controllers/bookController')
 
const router = require("express").Router()

router.route("/book").get(fetchBooks).post(addBook)
router.route("/book/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)

module.exports = router
