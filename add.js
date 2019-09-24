exports.addFile = (function (req, res) {
    var datax = "";
    var fs = require('fs');
    req.on('data', function (data) {
        datax = JSON.parse(data);
        var num = parseFloat(datax.rate);
        var dic = "";

        fs.readFile("./province/" + req.path.split('/')[2] + '.json', function (err, data) {

            if (err) {
                res.send(err);
            }
            dic = JSON.parse(data);
            var num2 = dic.rate;
            var divd = 2;
            if (parseFloat(dic.rate) == 0) {
                divd = 1;
            }
            var ans = (parseFloat(num2) + parseFloat(num)) / divd;
            console.log(ans);

            var fileName = "./province/" + req.path.split('/')[2] + '.json';
            var file = require(fileName);

            file.rate = ans.toFixed(2);

            fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(file));
                console.log('writing to ' + fileName);
                req.on('end', function () {
                    res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
                });
            });
        });

    });

});