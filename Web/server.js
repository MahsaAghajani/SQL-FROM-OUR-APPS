require('dotenv').config()

const express = require('express')
const bookRouter = require('./routes/bookRoutes')

const app = express();
const port = process.env.PORT || 8081;

app.use('/books', bookRouter)

app.listen(port, () => {
    console.log(`The Server is Listening on port ${port}`);
})