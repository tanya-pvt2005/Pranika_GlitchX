const jwt = require("jsonwebtoken");

// middleware to check if the token belongs to a user
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== 'user') {
            return res.status(403).json({ error: 'Access denied. Not a user account.' });
        }
      
        req.user = decoded;

        next();
    } 
    catch (err) {
        res.status(400).json({ error: 'Invalid token.' });
    }
}

module.exports = {authenticateUser}