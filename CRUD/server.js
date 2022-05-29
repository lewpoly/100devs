const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  'mongodb+srv://lewpoly:Da!sy103Chain@crudcluster.c82lufh.mongodb.net/?retryWrites=true&w=majority'
)
  .then((client) => {
    console.log('Connected to Database');
    const db = client.db('happy-gilmore-quotes');
    const quotesCollection = db.collection('quotes');
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });
    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body).then((result) => {
        res.redirect('/');
      });
    });
    app.get('/', (req, res) => {
      const cursor = db.collection('quotes').find();
      console.log(cursor);
    });
    app.listen(3000, () => {
      console.log('listening on 3000');
    });
  })
  .catch((error) => console.error(error));
