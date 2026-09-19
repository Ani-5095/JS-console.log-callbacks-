//Creating a http server.
const express = require("express");
const app=express();
function sum(n){
            let ans=0;
            for (let i = 0; i <= n; i++) {
                ans+=i;
            }
            return ans;
}
app.get("/" , function(req,res){
            const n=req.query.n;
            const result=sum(n);
            console.log("MAC user");
            res.send("The sum of first "+n+" numbers is "+result);
})
app.listen(3000);