var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
var mysql=require('mysql');
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'views'));
app.use(morgan('combined'));
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'sampleDB'
});
connection.connect(function(error){
  if(error){
  console.log("Database is not responding");
}
  else {
    console.log("Database is connected");
  }
});
app.get('/hai/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    var four=m[3];
    connection.query('INSERT INTO customer(cname,cmail,cmobile,cpassword) VALUES (?,?,?,?)',[one,two,three,four],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {

           res.send(one);
       }
   }) ;
});
app.get('/hai1/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    if(m[2]==1)
    {
         connection.query('SELECT cname,cmail,cmobile FROM customer WHERE (CMAIL=? AND CPASSWORD=?)',[one,two],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send((JSON.stringify(rows)));
       }
   }) ;
    }
    else if(m[2]==2)
    {
        connection.query('SELECT *FROM seller where (semail=? AND spassword=?)',[one,two],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(rows));
       }
   }) ;
    }
});
app.get('/hello/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    var four=(m[3]);
    connection.query('INSERT INTO seller(sname,semail,spassword,smobile) VALUES (?,?,?,?)',[one,two,three,four],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(one);
       }
   }) ;
});
app.get('/hello2/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    var four=(m[3]);
    var five=m[4];
    connection.query('INSERT INTO property(pid,ptype,parea,psize,pdescription) VALUES (?,?,?,?,?)',[one,two,three,four,five],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send("Thank you");
       }
   }) ;
});
app.get('/trans/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    var four=(m[3]);
    connection.query('INSERT INTO payment_details(email,c_number,c_name,expiry_date) VALUES (?,?,?,?)',[one,two,three,four],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send("Thank you");
       }
   }) ;
});
app.get('/update/:id',function(req,res){
    var value=req.params.id;
     var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    var four=(m[3]);
        connection.query('UPDATE customer SET cname=?,cmail=?,cmobile=?,cpassword=? WHERE cmail=?',[one,two,three,four,two],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send("Thank you");
       }
   });


});
app.get('/bookproperty/:id',function(req,res){
    var value=req.params.id;
    connection.query('SELECT *FROM property where parea=?',[value],function(err,rows,fields){
        if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(rows);
       }

    });
});
app.get('/update1/:id',function(req,res){
    var value=req.params.id;
     var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    var four=(m[3]);
        connection.query('UPDATE seller SET sname=?,semail=?,spassword=?,smobile=? WHERE semail=?',[one,two,three,four,two],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send("Thank you");
       }
   });
});
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var port = 3001;
app.listen(port, function () {
  console.log(`Maneesha's project is listening on port ${port}!`);
});
