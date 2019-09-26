var fs = require('fs');
exports.addFile = (function(req, res) {
    var datax = "";
    req.on('data', function(data) {
        datax = JSON.parse(data);
        var num = parseFloat(datax.rate);
        var dic = "";
        var fileName = "./province/" + datax.province  + '.json';
        fs.readFile(fileName, function(err, provincedata) {
            if (err) {
                res.sendStatus(404);
                res.end("province not found");
            }else{
                
                dic = JSON.parse(provincedata);
                var num2 = dic.rate;
                var divd = 2;
                if (parseFloat(dic.rate) == 0) {
                    divd = 1;
                }
                var newAverageRate = (parseFloat(num2) + parseFloat(num)) / divd;
                console.log(newAverageRate);
                dic.rate = newAverageRate.toFixed(2);

                fs.writeFile(fileName, JSON.stringify(dic, null, 2), function(err) {
                    if (err) return console.log(err);
            
                    console.log('writing to ' + fileName);
                        res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
                }); 
            }
            
        });

    });

});