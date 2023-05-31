const express= require("express");
const sql = require ('mysql');


const app = express();
app.use(express.json())
const router = require("./route/router");

app.use(express.json());

 let mysql=sql.createConnection({
    host:'localhost',
    port:'',
    user:'',
    password:'',
    database:''

})
mysql.connect(function(err){
    if(err) console.log(err);
    else{console.log("connected")}
})
app.use((req, res, next) => {
    req.mysql = mysql;
    next();
  });

app.use('/',router);
app.listen(3000,()=>console.log("app live on port300"))



//alter user 'root'@'localhost' identified with mysql_native_password by 'new_password' run this quarry on work bench for creating new password;
