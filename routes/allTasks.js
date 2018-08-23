const express = require('express')
const router = express.Router()

const allTasksController = require('../controllers/allTasks')

router.get('/', allTasksController.getAllTasks)

module.exports = router