const express = require("express")
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 3001
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server.js /api" })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));