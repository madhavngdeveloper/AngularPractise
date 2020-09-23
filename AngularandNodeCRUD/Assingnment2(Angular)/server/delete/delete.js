var express =require("express");
var mongodb =require("mongodb");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.post ("/",(req,res)=>{
    var person_id = req.body.person_id;
     
    var obj={"person_id":person_id};
    
    nareshIT.connect("mongodb://localhost:27017/mongodcrud",(err,db)=>{
       db.collection("personDetails").deleteOne(obj,(err,result)=>{
        if(err){
            res.send({"Delete":"Fail"});
        }else{
            res.send({"Delete":"Success"});
        }
       });
    });

});
module.exports = router;