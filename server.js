const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const errorHandler = require('./middlewares/ErrorHandler');
require('./database/connection');
const contactsRouter = require('./routes/contacts');

app.use(express.json());

app.use('/contacts', contactsRouter);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('<h1>~ Hello World! ~</h1>');
});

app.listen(port, () => {
    console.log(`My Contacts backend app listening on port ${port}`);
});
