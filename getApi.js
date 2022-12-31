const express=require('express')
const app=express();
const connection=require('./databse')


app.get('/',(req,resp)=>
{
    connection.query('select *from first',(err,result)=>
    {
        if(err) throw err
        else{
            resp.send(result)
        }
    })
}).listen(8000)