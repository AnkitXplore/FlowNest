const {validationResult} = require('express-validator');

// In-memory storage for tasks
let tasks = [];

module.exports.createTask = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const {title, description, status, priority} = req.body;

        const newTask = {
            _id: Date.now().toString(),
            title,
            description,
            status: status || 'todo',
            priority: priority || 'medium',
            user: req.user._id,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        tasks.push(newTask);
        res.status(201).json(newTask);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

module.exports.getAllTasks = async(req, res, next) => {
    try{
        const userTasks = tasks.filter(task => task.user === req.user._id);
        res.status(200).json({tasks: userTasks});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports.updateTask = async(req, res, next)=> {
    try{
        const {title, description, status, priority} = req.body;
        const taskIndex = tasks.findIndex(task => task._id === req.params.id && task.user === req.user._id);
        
        if(taskIndex === -1){
            return res.status(404).json({message: 'Task not found'});
        }

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title,
            description,
            status,
            priority,
            updatedAt: new Date()
        };

        res.status(200).json(tasks[taskIndex]);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

module.exports.deleteTask = async(req, res, next) =>{
    try{
        const taskIndex = tasks.findIndex(task => task._id === req.params.id && task.user === req.user._id);
        
        if(taskIndex === -1) {
            return res.status(404).json({message: "Task not found"});
        }

        tasks.splice(taskIndex, 1);
        res.status(200).json({message: "Task deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message})
    }
};
