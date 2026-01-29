const dotenv = require('dotenv');
dotenv.config() 
const cors = require('cors')
const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const http = require('http')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes.js')

const cookieParser = require('cookie-parser')
const taskRoutes = require('./routes/task.routes.js')

const dbUrl = process.env.MONGODB_URI || process.env.ATLASDB_URL

// Connect to MongoDB
main()
.then(() =>{
    console.log("Connected to Database");
})
.catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect(dbUrl)
}

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:53304",
        "https://flownest-frontend.onrender.com",
        "https://taskpilot-bice.vercel.app"
    ],
    credentials: true   
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('FlowNest Backend is Working!')
})

app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
    
})