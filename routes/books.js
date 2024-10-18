import express from "express";

const booksRouter = new express.Router()

// GET ALL BOOKS
booksRouter.get('/', async (req, res) => {
    res.send("All Books")
})


// CREATE NEW BOOKS



// EDIT BOOKS



// DELETE BOOKS


export default booksRouter