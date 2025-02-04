const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:20000'
const client = new MongoClient(url);

// Database Name
const dbName = 'task-manager'

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server')
  const db = client.db(dbName);
  const collection = db.collection('documents')
  const insertResult = await collection.insertMany([{
    name: 'Edon',
    age: 25
  }]);
  console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...

  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())