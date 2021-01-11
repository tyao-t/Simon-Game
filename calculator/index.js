const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var height = Number(req.body.Height);
    var weight = Number(req.body.Weight);
    res.send("Your BMI is " + weight/(height*height));
})
app.listen(3000, function() {
    console.log("Server has started on port 3000");
});
