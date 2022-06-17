const express = require('express');
const path = require('path');

const app = express();

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// App routes
app.use('/movies', require('./controllers/movies'));
app.use('/longboards', require('./controllers/longboards.js'));
app.use('/societies', require('./controllers/societies'));
app.use('/classes', require('./controllers/classes'));
app.use('/ships', require('./controllers/ships'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
