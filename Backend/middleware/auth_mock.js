const jwt = require('jsonwebtoken')

module.exports.authUser = async (req, res, next)=> {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Unauthorized - No token provided'})
    }

    try{
        console.log("Token received:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Token decoded successfully:", decoded);
        
        // Create a mock user object from the decoded token
        const user = { 
            _id: decoded._id, 
            firstname: 'User', 
            lastname: 'Name', 
            email: 'user@example.com' 
        };
        
        req.user = user;
        console.log("User set in request:", req.user);
        return next()
    }catch(err){
        console.log("JWT verification error:", err.message);
         return res.status(401).json({message: 'Unauthorized - Invalid token'})
    }
}
