const mongoose = require('mongoose')
const Task = require('../models/task')

exports.getOpenTasks = (req, res, next) => {
    Task.find()
        .where('category', 'Open')
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

exports.postOpenTask = (req, res, next) => {
    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        desc: req.body.desc,
        category: 'Open',
        notes: '',
        dueDate: '',
        priority: 'Low'
    })

    task.save()
        .then(result => {
        console.log(result)
        res.status(200).json({result})
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })

}

exports.getOpenTaskByID = (req, res, next) => {
    const id = req.params.taskId
    Task.findById(id)
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

exports.updateOpenTaskByID = (req, res, next) => {
    const id = req.params.taskId
    console.log(id)
    let updateOps = {}
    for(let i of req.body){
        updateOps[i.propName] = i.propValue
    }
    console.log(updateOps)
    Task.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json({result})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

exports.deleteOpenTaskByID = (req, res, next) => {
    const id = req.params.taskId
    Task.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}
