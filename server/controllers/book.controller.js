import Book from '../models/book.model.js';
// create new
async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find(); // here is our query to find Users
        res.json(allBooks);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); // here is our error response
    }
}

async function getBook(req,res) {
    try {
        const book = await Book.findById(req.params.id)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function updateBooks(req,res) {
    const options = {
        new: true,
        runValidators: true
    }
    try {
        const newBook = await Book.findByIdAndUpdate(req.params.id, req.body, options)
    res.json(newBook)
} catch (error) {
    console.log(error)
    res.status(400).json(error)
}
}

async function deleteBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
export {
    createBook,
    getAllBooks,
    getBook,
    updateBooks,
    deleteBook
};