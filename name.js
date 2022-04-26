const express=require('express')
const fs=require('fs')
const app=express()


app.get('/',(req,res)=>{
       res.send('Add user details in the URL')
})
app.get('/api/members',(req,res)=>{
  const  id=req.query.id;
  const name=req.query.name;
  const std=req.query.std;
  const add={id:id,
    name:name,
    std:std};
   
  if(name && id && std){
      fs.appendFileSync('details.txt',JSON.stringify(add),(err)=>{})
      const datas=fs.readFileSync('details.txt','utf8',(err,data)=>{})
      res.send(datas);
  }
  else{
    const datas=fs.readFileSync('details.txt','utf8',(err,data)=>{})
      res.send(datas)
  }
})
app.get('*',(req,res)=>{
    res.status(404).send('Error page not found')
})

app.listen(8080)