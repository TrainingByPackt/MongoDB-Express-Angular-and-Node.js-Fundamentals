var express = require('express');
var app = express();

// initialize todoData
var todoData = [
{id:1, task:'Take Breakfast'},
{id:2, task:'Read Book'},
{id:3, task:'Take Launch'},
{id:4, task:'Start Meeting'},
];

//set view engine
app.set("view engine","pug")

app.get('/', function (req, res) {
res.render('index', { TodoList: todoData });


});

var server = app.listen(8000, function () {
    console.log('Node server is running..');
});
