import express from "express";
import User from "../models/Users.js";

const usersRouter = new express.Router()

// GET ALL USERS
usersRouter.get('/', async (req, res) => {
    res.send('Users')
})


// CREATE NEW USERS
usersRouter.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        console.log(error);
        
    }
})


// EDIT USERS
usersRouter.put('/:id', async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updateUser)
    } catch (error) {
        console.log(error);
        
    }
})


// DELETE USERS
usersRouter.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)

        res.send({
            deletedUser: deleteUser,
            message: 'User Deleted!'
        })
    } catch (error){
        console.log(error);
        
    }
})

export default usersRouter