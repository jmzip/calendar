import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3001

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.get('/api', (req, res) => {
    res.json({ message: "Hello world" })
})

app.listen(
    port, 
    console.log(`listening on port ${port}`)
)