const express = require('express')
const router = express.Router()

const OpenTasksController = require('../controllers/openTasks')

router.get('/', OpenTasksController.getOpenTasks)

router.post('/', OpenTasksController.postOpenTask)

router.get('/:taskId', OpenTasksController.getOpenTaskByID)

router.patch('/:taskId', OpenTasksController.updateOpenTaskByID)

router.delete('/:taskId', OpenTasksController.deleteOpenTaskByID)

module.exports = router