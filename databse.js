const mysql = require('mysql2')
const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'student'
    }
)
connection.connect((err)=>
{
if(err)
{
    console.log(err)
}else{
    console.log("connected");
    
}
})
module.exports=connection
