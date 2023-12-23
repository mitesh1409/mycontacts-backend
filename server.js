const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>~ Hello World! ~</h1>');
});

app.get('/api/contacts', (req, res) => {
    res.status(200)
        .json({message: 'Returns a list of all the contacts'});
});

app.listen(port, () => {
    console.log(`My Contacts backend app listening on port ${port}`);
});
