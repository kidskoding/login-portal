const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/login', require('./routes/login'));

app.get('/', async function(req, res) {
    try {
        const items = await db.find();
        console.log('Users found:', items);
        res.json(items);
    } catch(error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.listen(port, function() {
    console.log('Server is running on port', port);
});