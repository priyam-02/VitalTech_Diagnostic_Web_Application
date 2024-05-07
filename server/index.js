const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const morgan = require('morgan');

// MongoDB Atlas Connection URI
const dbURI = 'mongodb+srv://bhavain:Bhavain1@cluster0.mgzag29.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    //start app
    app.listen(port, host, ()=>{
        console.log('Server is running on port', port);
        console.log('Connected to MongoDB Atlas');
    });
})  
.catch((err) => console.log(err));

//configure app
let port = 5001;
let host = 'localhost';

const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(morgan('tiny'));
// app.set('view engine', 'ejs');
// app.engine('ejs', require('ejs').__express);

// Routes
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);


app.use((req, res, next) => {
  let err = new Error('The server cannot locate ' + req.url);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  if(!err.status) {
      err.status = 500;
      err.message = 'Internal Server Error';
  }
  res.status(err.status);
  res.render('error', {error: err});
});

app.use('/uploads', express.static('uploads'));