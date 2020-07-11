const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const Index = require('./routes/index');
const User = require('./routes/users');
const Transfer = require('./routes/transfer_cradit');

const port = process.env.PORT || 3000;
const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');
app.engine('ejs', require('ejs').__express);

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes
app.use('/',Index);
app.use('/api/users' , User);
app.use('/api/transfer',Transfer);


//mongoose-database connection
const mongoURI = 'mongodb://localhost:27017/send-credit';
mongoose.connect(mongoURI ,{ useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
  console.log("MongoDb connected...")
}).catch(err=>{
   console.log(err)
  });

//listining on port 3000
app.listen(port,()=>{
    console.log("server is runing on port :" + port)
  });