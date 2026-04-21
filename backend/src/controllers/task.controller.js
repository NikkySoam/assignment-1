const taskModel = require('../models/task.model')

const getTask = async (req,res)=>{
    const {taskId} = req.params;
    const task = await taskModel.findById({_id:taskId});

    if(!task){
        return res.status(404).json({
            message:"task not found!"
        })
    }

    res.status(200).json({
        message:"user fetch successfully.",
        task
    })
}

const createTask = async (req,res)=>{
    const {task} = req.body
    const taskCreated = await taskModel.create({task})

    res.status(201).json({
        message:"create task successfully",
        taskCreated
    })
}

module.exports = {getTask,createTask}