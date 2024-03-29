module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Auth');
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
};