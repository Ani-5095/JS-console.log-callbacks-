const express=require("express");
const app=express();
var users = [{
            name: "Virat" , 
            kidneys: [
            {           healthy: false       } ,
            {           healthy: true        }
            ]          }
]
            app.use(express.json());

            // GET request : Check-up for a user            

app.get("/" , function(req,res){
          const name=users[0].kidneys;
          const noOfKidneys=name.length;
          let healKidney=0;
          for (let i = 0; i < noOfKidneys; i++) {
                    if(name[i].healthy==true){
                              healKidney++;
                    }
          }
          const UnhealthyKidney=noOfKidneys-healKidney;
          res.json({
                    "Total Kidneys":noOfKidneys,
                    "Healthy Kidneys":healKidney,
                    "Unhealthy Kidneys":UnhealthyKidney
          })
})

            // POST request : Adding a new Kidney for a user

app.post("/" , function(req ,res){
                        const isHealthy=req.body.isHealthy;
                        users[0].kidneys.push({
                                    healthy:isHealthy
                        })
                        res.json({
                                    message : "ADDED NEW KIDNEY"
                        })
})

            // PUT request : Updating all Kidneys to Healthy for a user

            app.put("/" , function(req , res){
                         if(ThereAtleastOneUnhealthyKidney()){
            for(let i=0;i<users[0].kidneys.length;i++){
                        users[0].kidneys[i].healthy=true;
            }
            res.json({
                        message : "ALL KIDNEYS UPDATED TO HEALTHY"
            })
                        }
                          else {
                                    res.status(411).json({
                        message: "NO UNHEALTHY KIDNEYS TO UPDATE"
                        });
                        }
})

            // DELETE request : Deleting all Unhealthy Kidneys for a user

app.delete("/" , function(req , res){
            if(ThereAtleastOneUnhealthyKidney()){
                        const newKidneys=[];
                        for(let i=0;i<users[0].kidneys.length;i++){
                                    if(users[0].kidneys[i].healthy){
                                                newKidneys.push({
                                                healthy:true            
                                                });
                                    }
                        }
                        users[0].kidneys=newKidneys;
                        res.json({
                                    message : "UNHEALTHY KIDNEYS DELETED"
                        })
            }
            else{
                        res.status(411).json({
                                    message : "NO UNHEALTHY KIDNEYS TO DELETE"
                        })
            }
})

            // Function to check if there is atleast one unhealthy kidney for a user

function ThereAtleastOneUnhealthyKidney(){
            let atleastOneUnhealthyKidney=false;
            for(let i=0;i<users[0].kidneys.length;i++){
                        if(!users[0].kidneys[i].healthy){
                                    atleastOneUnhealthyKidney=true;
                        }
            }
            return atleastOneUnhealthyKidney;
}

app.listen(4000);