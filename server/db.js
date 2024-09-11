const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/login-portal')
    .then(function() { 
        console.log('MongoDB connected!'); 
    })
    .catch(function(error) {
        console.error('Error connecting to MongoDB:', error.message);
    });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const Item = mongoose.model('User', userSchema);

module.exports = Item;