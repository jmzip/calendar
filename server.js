import express from 'express'

const app = express()
const port = 3001

app.get('/api', (req, res) => {
    res.json({ message: "Hello world" })
})

app.listen(
    port, 
    console.log(`listening on port ${port}`)
)