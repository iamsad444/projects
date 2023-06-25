const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const port=80;
app.get("/",(req,res)=>{
  res.send("This is my first express app.")
});
app.listen(port,()=>{
  console.log(`The app started running at port ${port}`)
})
