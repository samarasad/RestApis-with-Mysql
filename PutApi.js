const express=require('express')
const app=express();

const connection=require('./databse')
app.use(express.json())

app.put('/update/:name',(req,resp)=>
{

    const data=[req.body.stuName,req.body.stuEmail,req.params.name]

    connection.query('update first set StuName= ?,StuEmail=? where stuId=?' ,data,(err,result)=>
    {
        resp.send(result)
    })


  

}).listen(8000,()=>
{
    console.log("Running :8000")
})