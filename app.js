const express = require('express')
const app = express()
const fruitRouter = require('./routes/fruits')
const logger = require('./logger')

app.use(logger)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the FruityAPI')
})

app.use('/fruits', fruitRouter)


module.exports = app

// first argument in the funtion is the endpoint

// Second argument in the function is an anonymous arrow callback function, with 2 parameters, response and request
//

//app.get('/fruits/:name', (req,res) => {
    // res.send(req.params)
    // Alternatively
    // const chickenName = req.params
    // res.send(chickenName)
//})

// app.get('/lotr', (req, res) => {
//     res.send('Hello Samwise!')
// })


