var mysql =require("mysql");
var bodyparser=require("body-parser");
var express=require("express")
var app=express();
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
host:"localhost",
user:"root",
password:"root",
database:"mytask"
});
mysqlConnection.connect((err,req,res)=>{
if(!err)
console.log("Databse connectoin successful")
else
console.log("error in connecton" + JSON.stringify(req,undefined,2));
});
app.listen(8080,()=>
console.log("server running on port no 8080"));
// DISPLAY LIST ALL PEOLPLE
app.get("/persons",(req,res)=>{
    mysqlConnection.query(`select * from persons`,(err,row,fields)=>{
if(!err)
res.send(row);
else
console.log(err);
});
});
//DISPLAY A SINGLE PERSON BY ID
app.get("/persons/:id",(req,res)=>{
    mysqlConnection.query(`select * from persons where p_id= ?`
    ,[req.params.id],(err,row,fields)=>{
if(!err)
res.send(row);
else
console.log(err);
    });
});
//INSERT A NEW PERSON BY POST METHOD
app.post("/persons/insert",(req,res)=>{

    mysqlConnection.query(`insert into persons values(
        ${req.body.p_id},
        '${req.body.p_name}',
        ${req.body.p_age},
        '${req.body.p_gender}',
        ${req.body.p_mob})`
         ,(err,result)=>{
            if(err){
                res.send({insert:"fail"});
            }else{
                res.send({insert:"success"})
            }
    });
});
//DELETE A PERSON BY ID BY DELETE METHOD
app.delete("/persons/:id",(req,res)=>{
    mysqlConnection.query(`DELETE  from persons where p_id= ? `
    ,[req.params.id],(err,row,fields)=>{
if(!err)
res.send('delete successful');
else
console.log(err);
    });
});
// INSERT DATA INTO RECORD BY PUT METHOD
app.put("/persons/:id",(req,res)=>{
    mysqlConnection.query(`insert into persons values(
       ${req.body.p_id},
       '${req.body.p_name}',
       ${req.body.p_age},
       '${req.body.p_gender}',
       ${req.body.p_mob})`,(err,result)=>{
            if(err){
                res.send({insert:"fail"});
            }else{
                res.send({insert:"success"})
            }
    });
});
 
