const express = require("express");
const app = express();
app.use(express.json());
app.post("/health-checkup", function (req, res) {
            //do something with kidneys here
            //kidneys=[1 , 2]
            const kidneys= req.body.kidneys;
            const kidneyLength = kidneys.length;
            res.send("Kidney length is: " + kidneyLength);
});
app.listen(3000);