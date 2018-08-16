const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const openTasksRoutes = require('./routes/openTasks')
const closedTasksRoutes = require('./routes/closedTasks')

mongoose.connect('mongodb+srv://toDo:toDo123@cluster0-jw0or.mongodb.net/test?retryWrites=true')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/openTasks', openTasksRoutes)
app.use('/closedTasks', closedTasksRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error) 
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})

module.exports = app