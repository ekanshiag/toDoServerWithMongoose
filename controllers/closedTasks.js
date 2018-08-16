const mongoose = require('mongoose')
const Task = require('../models/task')

exports.getClosedTasks = (req, res, next) => {
    Task.find()
        .where('category', 'Closed')
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

exports.postClosedTask = (req, res, next) => {
    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        desc: req.body.desc,
        category: 'Closed',
        notes: req.body.notes,
        dueDate: req.body.dueDate,
        priority: req.body.priority
    })
    task.save()
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

exports.getClosedTaskByID = (req, res, next) => {
    const id = req.params.taskId
    Task.findById(id)
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

exports.deleteClosedTaskByID = (req, res, next) => {
    const id = req.params.taskId
    Task.remove({_id: id})
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