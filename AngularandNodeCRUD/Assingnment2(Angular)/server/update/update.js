var express =require("express");
var mongodb =require("mongodb");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.post ("/",(req,res)=>{
    var person_id = req.body.person_id;
    var person_name = req.body.person_name;
    var age = req.body.age;
    var gender = req.body.gender; 
    var mobilenumber = req.body.mobilenumber;
    var obj_one={"person_id":person_id};
    var obj_two={$set:{"person_name":person_name,"age":age,"gender":gender,"mobilenumber":mobilenumber,}};
    nareshIT.connect("mongodb://localhost:27017/mongodcrud",(err,db)=>{
       db.collection("personDetails").updateOne(obj_one,obj_two,(err,result)=>{
        if(err){
            res.send({"Update":"Fail"})
        }else{
            res.send({"Update":"Success"});
        }
       });
    });

});
module.exports = router;