const express = require('express')
const router = express.Router()

const ClosedTasksController = require('../controllers/closedTasks')

router.get('/', ClosedTasksController.getClosedTasks)

router.post('/', ClosedTasksController.postClosedTask)

router.get('/:taskId', ClosedTasksController.getClosedTaskByID)

router.post('/patch/:taskId', ClosedTasksController.updateClosedTaskByID)

router.post('/delete/:taskId', ClosedTasksController.deleteClosedTaskByID)

module.exports = router