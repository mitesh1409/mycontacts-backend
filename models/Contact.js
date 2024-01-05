const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Connected to mycontacts-backend database successfully :)');
}

connect().catch(err => console.log(err));

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        phone: {
            type: String,
            required: [true, 'Phone is required']
        },
        description: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Contact', contactSchema);
