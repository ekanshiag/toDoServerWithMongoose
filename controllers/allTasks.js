const mongoose = require('mongoose')
const Task = require('../models/task')

exports.getAllTasks = (req, res, next) => {
    Task.find()
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}