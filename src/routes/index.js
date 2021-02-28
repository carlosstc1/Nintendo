const express = require('express');
const router = express.Router();
const path = require('path');


//Routes
router.get('/', (req, res, next) => {res.render(path.join(__dirname,'../','views','index.ejs'))});
router.get('/summer-pack', (req, res, next) => {res.render(path.join(__dirname,'../','views','summer-pack.ejs'))});
router.get('/about', (req, res, next) => {res.render(path.join(__dirname,'../','views','about.ejs'))});


//Module export
module.exports = router;