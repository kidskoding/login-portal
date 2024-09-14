const express = require('express');
const db = require('../db');

const router = express.Router();

router.post('/', function(req, res) {
    const { username, password } = req.body;
    console.log(username, password);
    
    if (username && password) {
        db.find({ username, password })
            .then(function(items) {
                if (items.length > 0) {
                    res.json({ message: 'Login successful' });
                } else {
                    res.status(401).json({ message: 'Invalid username or password' });
                }
            })
            .catch(function(error) {
                res.status(500).json({ message: 'Error fetching data' });
            });
    } else {
        res.status(400).json({ message: 'Username and password are required' });
    }
});

module.exports = router;