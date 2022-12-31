
//NOTE:-
// When you work with mysql  and you want to POST the data  into database using POSTMAN them you should define the structure of table.

// POSTMAN send an JSON object and inside this object we access the properties 



const express=require('express')
const app=express();
const connection=require('./databse')

app.use(express.json())
app.post('/',(req,resp)=>
{
    
    // Define the structure of table and acscess the data from request.
    const schema={stuName:req.body.stuName,stuEmail:req.body.stuEmail,stuCity:req.body.stuCity,stuId:req.body.stuId};

    connection.query('insert into  first set ?',schema,(err,result,fields)=>
    {
        if(err)
        {
            console.log("no")
            throw err;
        }
        else{
            resp.send(result)
           
        }

    })
}).listen(8000,()=>
{
    console.log("Runing on port:8000")
})