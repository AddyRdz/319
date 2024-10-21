import express from "express";
import Review from "../models/Reviews.js"

const reviewsRouter = new express.Router()

// GET ALL REVIEWS
reviewsRouter.get('/', async (req, res) => {
    // res.send('GET All Reviews')
    try {
        const reviews = await Review.find()
        res.send(reviews)
    }catch (error){
        console.log(error);
        
    }
})


// CREATE NEW REVIEWS
reviewsRouter.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.send(review)
    } catch (error) {
        console.log(error);
        
    }
})


// EDIT REVIEWS
reviewsRouter.put('/:id', async (req, res) => {
    try {
        const updateReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updateReview)
    } catch (error) {
        console.log(error);
        
    }
})


// DELETE REVIEWS
reviewsRouter.delete('/:id', async (req, res) => {
    try {
        const deleteReview = await Review.findByIdAndDelete(req.params.id)

        res.send({
            deletedReview: deleteReview,
            message: 'Review Deleted!'
        })
    } catch (error){
        console.log(error);
        
    }
})
export default reviewsRouter