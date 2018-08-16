const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    desc: String,
    category: {type: String, enum:['Open', 'Closed']},
    notes: String,
    dueDate: Date,
    priority: {type: String, enum:['Low', 'Medium', 'High']}
})

module.exports = mongoose.model('Task', taskSchema)