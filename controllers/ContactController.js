const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');

// @desc GET /contacts - Get all the contacts
// @route GET /contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    res.status(200)
        .json({
            message: 'GET /contacts - Get all the contacts',
            data: contacts
        });
});

// @desc POST /contacts - Create a contact
// @route POST /contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone, description } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('name, email and phone are required!');
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        description
    });

    console.log('Created a contact record', contact);

    res.status(201)
        .json({
            message: 'POST /contacts - Create a contact'
        });
});

// @desc GET /contacts/:id - Get contact with id
// @route GET /contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200)
        .json({
            message: `GET /contacts/:id - Get contact with id: ${req.params.id}`
        });
});

// @desc PUT /contacts/:id - Update contact with id
// @route PUT /contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200)
        .json({
            message: `PUT /contacts/:id - Update contact with id: ${req.params.id}`
        });
});

// @desc DELETE /contacts/:id - Delete contact with id
// @route DELETE /contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200)
        .json({
            message: `DELETE /contacts/:id - Delete contact with id: ${req.params.id}`
        });
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
