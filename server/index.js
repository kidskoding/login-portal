const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.get('/', function(req, res) {
    res.send('/ route!');
});

app.listen(port, function() {
    console.log('Server is running on port', port);
});