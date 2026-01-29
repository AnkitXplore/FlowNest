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
app.get('/tasks', (req, res) => {
    res.json({ tasks: [] });
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
