const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const createRouter = require('./helpers/create_router');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('birds_hub');
  const birdsCollection = db.collection('birds');
  const birdsRouter = createRouter(birdsCollection)
  app.use('/api/birds', birdsRouter);

  app.listen(5000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})