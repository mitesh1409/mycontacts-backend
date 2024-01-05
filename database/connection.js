const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Connected to mycontacts-backend database successfully :)');
  } catch (err) {
    console.log('Failed to connect to the database!', err);
    process.exit(1);
  }
}

connectToDB();
