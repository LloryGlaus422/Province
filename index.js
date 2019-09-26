var express = require('express');
const request = require('./request')
var app = express();
var path = require('path');
var fs = require('fs');
const add = require('./add');
app.set('view engine', 'pug');
app.set('views', 'view');



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
  var rate = req.query.rate
    console.log(rate)
  req.on('data', function (data) {
    console.log(rate)
    var divd = 2;
    var datax = "";
    datax = JSON.parse(data);
    var num = parseFloat(datax.rate);
    var ave = (rate + num) / divd;
    console.log(ave);
      })
});



app.listen(8080);