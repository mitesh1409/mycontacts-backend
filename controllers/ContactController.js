// @desc GET /contacts - Get all the contacts
// @route GET /contacts
// @access public
const getContacts = (req, res) => {
    res.status(200)
        .json({
            message: 'GET /contacts - Get all the contacts'
        });
};

// @desc POST /contacts - Create a contact
// @route POST /contacts
// @access public
const createContact = (req, res) => {
    res.status(201)
        .json({
            message: 'POST /contacts - Create a contact'
        });
};

// @desc GET /contacts/:id - Get contact with id
// @route GET /contacts/:id
// @access public
const getContact = (req, res) => {
    res.status(200)
        .json({
            message: `GET /contacts/:id - Get contact with id: ${req.params.id}`
        });
};

// @desc PUT /contacts/:id - Update contact with id
// @route PUT /contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200)
        .json({
            message: `PUT /contacts/:id - Update contact with id: ${req.params.id}`
        });
};

// @desc DELETE /contacts/:id - Delete contact with id
// @route DELETE /contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200)
        .json({
            message: `DELETE /contacts/:id - Delete contact with id: ${req.params.id}`
        });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
