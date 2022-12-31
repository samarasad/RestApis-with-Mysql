const express=require('express')
const app=express();

const connection=require('./databse')
app.use(express.json())

app.delete('/delete',(req,resp)=>
{

    const data=[req.body.stuId]
    // console.log(req.body.stuId)
    connection.query('delete from first where StuId=?' ,data,(err,result)=>
    {
        resp.send(result)
    })
    //   resp.send('okk')

  

}).listen(8000,()=>
{
    console.log("Running :8000")
})