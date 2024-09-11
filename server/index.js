const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/login-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(function() { 
    console.log('MongoDB connected!'); 
}).catch(function(error) {
    console.error('Error connecting to MongoDB:', error.message);
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const Item = mongoose.model('User', userSchema);

app.get('/', async function(req, res) {
    try {
        const items = await Item.find();
        console.log('Users found:', items);
        res.json(items);
    } catch(error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.listen(port, function() {
    console.log('Server is running on port', port);
    //test commit
});