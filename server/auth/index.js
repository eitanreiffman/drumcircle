const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {

    const nonAuthRoutes = ['/login', '/signup'];

    if (nonAuthRoutes.includes(req.path)) {
        return next();
    }

    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // Log decoded user info
    console.log('Decoded User:', decoded);

    req.user = decoded;
    next();

  });
}

module.exports = authenticateToken