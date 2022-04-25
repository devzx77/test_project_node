var express=require('express')
const app=express()
app.get('/:name',(req,res)=>{
    var name=req.params.name
    res.send('Hello '+ name+'!')
})
app.listen(3000)