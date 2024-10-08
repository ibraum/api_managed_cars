const bodyParser = require('body-parser')
const express = require('express')
const { createCarDB } = require('./migrations/init_database')

const app = express()
const port = 3000

createCarDB()

app.get('/api/car', (req, res) => {
    const message = "That's a good beginning !"
    res.status(200).json({message})
})

app.listen(port, () => {
    console.log("L'application tourne sur le port http://localhost:" + port)
})