const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// In-memory storage for testing
let users = [];

module.exports.registerUser = async(req, res, next) => {
    try {
        const {fullname, email, password } = req.body;

        // Check if user already exists
        const isUserAlready = users.find(user => user.email === email);
        if(isUserAlready){
            return res.status(400).json({message: 'User already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            _id: Date.now().toString(),
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        };

        users.push(newUser);

        const token = jwt.sign({_id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '24h'});

        res.status(201).json({token, user: {
            _id: newUser._id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email
        }});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.loginUser = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = users.find(u => u.email === email);
        if(!user){
            return res.status(400).json({message: 'Invalid credentials'})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: 'Invalid credentials'})
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '24h'});

        res.cookie('token', token);
        res.status(200).json({token, user: {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        }});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getUserProfile = async(req, res, next) => {
    try {
        const user = users.find(u => u._id === req.user._id);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        res.status(200).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.logoutUser = async(req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({message: 'Logged out successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
