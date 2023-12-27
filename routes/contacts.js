const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/ContactController');

// Define a middleware that is specific to this router instance.
router.use((req, res, next) => {
    console.log('contacts router got hit, time: ', Date.now());
    next();
});

// REST Routes for the contacts resource

// GET /contacts - Get all the contacts
router.get('/', getContacts);

// POST /contacts - Create a contact
router.post('/', createContact);

// GET /contacts/:id - Get contact with id
router.get('/:id', getContact);

// PUT /contacts/:id - Update contact with id
router.put('/:id', updateContact);

// DELETE /contacts/:id - Delete contact with id
router.delete('/:id', deleteContact);

module.exports = router;
