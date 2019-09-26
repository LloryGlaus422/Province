module.exports = function (req, res) {
    const fs = require("fs");
    var rate = req.query.rate;
    var province = req.query.province + ".json";
    var province2 = fs.readFileSync(province);
    var NewData = JSON.parse(province2);
    var rating = (Number(NewData.rate) + Number(rate))
    NewData.rate = Number(Number(NewData.rate + rating).toFixed(2))
    var t = Number(NewData.rate)/ 2
    fs.writeFile(province, JSON.stringify(t,null,2), function (err) {
        if (err) throw err;
    });
    res.end("New Average Rate " + NewData.rate)
}