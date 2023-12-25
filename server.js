const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const contactsRouter = require('./routes/contacts');

app.use('/contacts', contactsRouter);

app.get('/', (req, res) => {
    res.send('<h1>~ Hello World! ~</h1>');
});

app.listen(port, () => {
    console.log(`My Contacts backend app listening on port ${port}`);
});
