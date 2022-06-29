const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const moviesRoutes = require('./routes/movies-routes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader(
      'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
  });
  

app.use('/api/movies', moviesRoutes);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
}); 

mongoose.connect("mongodb://localhost:27017/movies_data")
                .then(() => {
                  console.log('Connected to database!')
                  app.listen(5000);
                })
                .catch(() => {
                  console.log('Connection failed!')
                })
