import express from "express";
// import Users from "../models/Users";

const usersRouter = new express.Router()

// GET ALL USERS
usersRouter.get('/', async (req, res) => {
    res.send('Users')
})


// CREATE NEW USERS



// EDIT USERS


// DELETE USERS

export default usersRouter