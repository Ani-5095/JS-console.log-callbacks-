onst express = require("express");
const app = express();
app.get("/health-checkup", function (req, res) {
            //do something with kidneys here
            const kidneys= req.body.kidneys;
            const kidneyLength = kidneys.length;
            res.send("Kidney length is: " + kidneyLength);
});
app.listen(3000);