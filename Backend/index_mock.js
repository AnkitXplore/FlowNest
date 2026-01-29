const dotenv = require('dotenv');
dotenv.config() 
const cors = require('cors')
const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

// Import mock controllers
const { registerUser, loginUser, getUserProfile, logoutUser } = require('./controllers/user_mock.js');

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:53304",
        "https://flownest-frontend.onrender.com",
        "https://flownest-backend-2.onrender.com",
        "https://flownest-10.onrender.com",
        "https://taskpilot-bice.vercel.app"
    ],
    credentials: true   
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Health check
app.get('/', (req, res) => {
    res.send('FlowNest Backend is Working! (Mock Mode)')
})

// Mock user routes
app.post('/users/register', registerUser);
app.post('/users/login', loginUser);
app.get('/users/profile', getUserProfile);
app.post('/users/logout', logoutUser);

// Mock task routes (basic implementation)
let tasks = []; // In-memory storage for tasks

app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});

app.get('/tasks/all', (req, res) => {
    res.json({ tasks: tasks });
});

app.post('/tasks/create', (req, res) => {
    try {
        const { title, description, priority, status } = req.body;
        const newTask = {
            _id: Date.now().toString(),
            title: title || 'New Task',
            description: description || '',
            priority: priority || 'medium',
            status: status || 'todo',
            createdAt: new Date().toISOString()
        };
        
        tasks.push(newTask);
        res.status(201).json({ 
            message: 'Task created successfully',
            task: newTask 
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create task' });
    }
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
