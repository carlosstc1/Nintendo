const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

//Routes
app.use(routes);
app.use(express.static(path.join(__dirname,'public')));

//Settings
app.set('view engine', 'ejs');

//Middleware



//Server listening
app.listen(3000);
