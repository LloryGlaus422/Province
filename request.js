var fs = require('fs');
module.exports = function (req, res, URL) {
    fs.appendFile('req.txt', URL + ",", function (err) {
        if (err) {
            status(404);
        } else {
            fs.readFile('req.txt', function (err, data) {
                if (err) throw err;
                var stringData = data.toString();
                var splittedData = stringData.split(",");
                console.log(splittedData.length - 1)
                fs.writeFile('request.txt', splittedData.length - 1, function (err) {
                    if (err) throw err;
                    console.log(splittedData.length - 1)
                });
            });
        }
    })
}