const { books } = require("../Database/connect")

///// fetch books
exports.fetchBooks = async function(req,res){
    // logic to fetch books from database 
    const datas = await books.findAll() // select * from books, books.find(), always returns array
    res.json({
        message : "books fetched successfully", 
        datas
    })
}


//// add book
exports.addBook = async (req, res) => {
    // logic to add book to database
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body
    if (bookName && bookPrice && bookAuthor && bookGenre) {
            // check if all data aako xa vane only proceed , else not proceed throw error in response
        await books.create({
            bookName,
            bookPrice,
            bookAuthor,
            bookGenre
        })
        res.json({
            status: 200,
            message: "Book Post successfylly."
        })
    } else {

        res.json({
            message: "Pleae provide all information"
        })
    }
}




///// delete book
exports.deleteBook = async (req, res) => {
    const id = req.params.id
    await books.destroy({where:{id}})
    res.json({
        message: "Book deleted successfylly."
    })
}

/////// update book
exports.editBook = async (req, res) => {
    const id = req.params.id
    const bookName = req.body.bookName
    const bookPrice =req.body.bookPrice
    const bookAuthor = req.body.bookAuthor
    const bookGenre = req.body.bookGenre

    try {
        await books.update(
            {
                bookName: bookName,
                bookPrice: bookPrice,
                bookAuthor: bookAuthor,
                bookGenre: bookGenre
            },
            {
                where: { id: id }
            }
        )

        res.json({
            message: "Book updated successfully."
        });
    } catch (error) {
        res.json({
            message: "Error updating book."
        })
    }
}


///// single fetch book or display book
exports.singleFetchBook = async function(req,res){
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas = await books.findByPk(id) // always returns object, mongoose --> findById
   
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
        // datass
    })

}

// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai 