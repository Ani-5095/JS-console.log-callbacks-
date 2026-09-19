const express = require("express");
const app = express();
app.get("/health-checkup", function (req, res) {
            // Do Health checks here
const kidneyID = req.query.kidneyID;
const username = req.headers.username;
const password = req.headers.password;
if(username != "Anirudh" || password != "pass") {
            res.status(400).json({
                        message: "User doesn't exist"
            });
            return;
}
if(kidneyID !=1 && kidneyID !=2) {
            res.status(411).json({
                        message: "Wrong Inputs"
            });
            return;
}
res.send("Your heart is healthy");
});
app.listen(3000);