const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const createRouter = require('./helpers/create_routers');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('bbc_edu');
  const planetsCollection = db.collection('planets');
  const planetsRouter = createRouter(planetsCollection)
  app.use('/api/planets', planetsRouter);


  const questionsCollection = db.collection('questions');
  const questionsRouter = createRouter(questionsCollection)
  app.use('/api/questions', questionsRouter);

  app.listen(5000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})