import express from "express";

const reviewsRouter = new express.Router()

// GET ALL REVIEWS
reviewsRouter.get('/', async (req, res) => {
    res.send("All Reviews")
})


// CREATE NEW REVIEWS



// EDIT REVIEWS



// DELETE REVIEWS

export default reviewsRouter