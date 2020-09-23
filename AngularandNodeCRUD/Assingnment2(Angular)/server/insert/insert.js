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
    
    var obj={"person_id":person_id,"person_name":person_name,"age":age,"gender":gender,"mobilenumber":mobilenumber,};
    nareshIT.connect("mongodb://localhost:27017/mongodcrud",(err,db)=>{
       db.collection("personDetails").insertOne(obj,(err,result)=>{
        if(err){
            res.send({"Insert":"Fail"});
        }else{
            res.send({"Insert":"Success"});
        }
       });
    });

});
module.exports = router;