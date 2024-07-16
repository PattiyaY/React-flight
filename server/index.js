const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://pattiyawork:cONvanFrOUFqZ21f@cluster0.5ifmres.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const comments = database.collection("comments");

    // Query data
    const options = {
      projection: { name: 1, text: 1 },
    };

    // name and text except other fields -> projection: { name: 1, text: 1 }
    // All fields except for name and text -> projection: { name: 0, text: 0 }

    const comment = await comments.findOne({}, options);

    console.log(comment);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
