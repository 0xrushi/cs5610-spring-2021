const express= require('express')
const app = express()
var bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard-03',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demo-controller');
demos(app);

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000)