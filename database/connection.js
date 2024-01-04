const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(process.env.DB_CONNECTION_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect() {
  try {
    // Connect the mongoClient to the server	(optional starting in v4.7)
    await mongoClient.connect();

    // Send a ping to confirm a successful connection
    await mongoClient.db("mycontacts-backend").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log('Failed to connect to MongoDB');
    console.log(error);
  } finally {
    // Ensures that the mongoClient will close when you finish/error
    await mongoClient.close();
  }
}

connect();

// OR
// connect().catch(console.dir);
