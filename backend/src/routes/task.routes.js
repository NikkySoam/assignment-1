const express = require('express');
const taskRouter = express.Router();

const authMiddleware = require('../middlewares/auth.middleware')
const taskController = require('../controllers/task.controller')


taskRouter.post('/create-task',authMiddleware.authUser,taskController.createTask)

taskRouter.get('/get-task/:taskId',authMiddleware.authUser,taskController.getTask)


module.exports = taskRouter