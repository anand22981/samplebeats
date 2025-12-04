const express = require("express")

const app = express()

app.use("/Sigin",(req,res)=>{
   res.send("Hello from the server")
})
app.use("/Sigup",(req,res)=>{
   res.send("Hello from the server")
})

app.listen(3000,()=>{
  console.log(" Sever is running...")
});