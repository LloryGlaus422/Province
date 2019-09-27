var express = require('express');
var request = require('./request')
var app = express();
var path = require('path');
var fs = require('fs');
app.set('view engine', 'pug');
app.set('views', 'view');
var add = require('./add')



app.use(function (req, res, next) {
  request(req, res, req.originalUrl);
  next();
})

app.use(express.static(path.join(__dirname, './public')));


app.get('/Provinces/:province', function (req, res) {
  var filename = req.params.province + ".json";
  fs.readFile('./' + filename, function (err, data) {
    if (err) throw err;
    var datas = JSON.parse(data);
    res.render('index.pug', datas)
  });
});

app.get('/rate', function (req, res) {
  add(req,res);
})

app.listen(8080);
