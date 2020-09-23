var express =require("express");
var mongodb =require("mongodb");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.get ("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/mongodcrud",(err,db)=>{
       db.collection("personDetails").find().toArray((err,array)=>{
        if(err){
            res.send("error while fetching");
        }else{
            res.send(array);
        }
       });
    });

});
module.exports = router;