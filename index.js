import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import usersRouter from './routes/users.js'
import booksRouter from './routes/books.js'
import reviewsRouter from './routes/reviews.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)

const app = express();
const PORT = 4000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/users', usersRouter)
app.use('/books', booksRouter)
app.use('/reviews', reviewsRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    
})