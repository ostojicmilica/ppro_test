const express = require("express");
const MongoClient = require('mongodb').MongoClient

const app = express()
const port = process.env.PORT || 3000
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/dev'

async function initMongo() {
    console.log('Initialising MongoDB...')
    let success = false
    while (!success) {
        try {
        client = await MongoClient.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        success = true
        } catch {
        console.log('Error connecting to MongoDB, retrying in 1 second')
        await new Promise(resolve => setTimeout(resolve, 1000))
        }
    }
    console.log('MongoDB initialised')
    return client.db(client.s.options.dbName).collection('messages')
}

async function retrieveMessage(db) {
    const result = await db.find().toArray()
    return result
}

async function saveNote(db, message) {
    await db.insertOne(message)
  }

async function start() {
    const db = await initMongo()

    await saveNote(db, {message: "Hello World!"})
  
    app.get('/', async (req, res) => {
        result = await retrieveMessage(db)
        res.send(result.message)
    })
  
    app.listen(port, () => {
      console.log(`App listening on http://localhost:${port}`)
    })
}

start()