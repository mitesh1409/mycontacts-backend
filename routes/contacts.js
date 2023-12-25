const express = require('express');
const router = express.Router();

// Define a middleware that is specific to this router instance.
router.use((req, res, next) => {
    console.log('contacts router got hit, time: ', Date.now());
    next();
});

// REST Routes for the contacts resource

// GET /contacts - Get all the contacts
router.get('/', (req, res) => {
    res.status(200)
        .json({
            message: 'GET /contacts - Get all the contacts'
        });
});

// POST /contacts - Create a contact
router.post('/', (req, res) => {
    res.status(201)
        .json({
            message: 'POST /contacts - Create a contact'
        });
});

// GET /contacts/:id - Get contact with id
router.get('/:id', (req, res) => {
    res.status(200)
        .json({
            message: `GET /contacts/:id - Get contact with id: ${req.params.id}`
        });
});

// PUT /contacts/:id - Update contact with id
router.put('/:id', (req, res) => {
    res.status(200)
        .json({
            message: `PUT /contacts/:id - Update contact with id: ${req.params.id}`
        });
});

// DELETE /contacts/:id - Delete contact with id
router.delete('/:id', (req, res) => {
    res.status(200)
        .json({
            message: `DELETE /contacts/:id - Delete contact with id: ${req.params.id}`
        });
});

module.exports = router;
