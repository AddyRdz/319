import express from "express";
import Book from "../models/Books.js"

const booksRouter = new express.Router()

// GET ALL BOOKS
booksRouter.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.send(books)
    }catch (error){
        console.log(error);
        
    }
})


// CREATE NEW BOOKS
booksRouter.post('/', async (req, res) => {
    try {
        const books = await Book.create(req.body)
        res.send(books)
    } catch (error) {
        console.log(error);
        
    }
})


// EDIT BOOKS
booksRouter.put('/:id', async (req, res) => {
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updateBook)
    } catch (error) {
        console.log(error);
        
    }
})



// DELETE BOOKS
booksRouter.delete('/:id', async (req, res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete(req.params.id)

        res.send({
            deletedBook: deleteBook,
            message: 'Book Deleted!'
        })
    } catch (error){
        console.log(error);
        
    }
})

export default booksRouter