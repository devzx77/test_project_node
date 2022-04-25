var express=require('express')

const app=express()

app.get('/',(req,res)=>{
     res.send("Hello world!")
})

app.get('/home/:id',(req,res)=>{
    const id=req.params.id
    res.send("This is a Home page"+ id)
})
app.get('/about',(req,res)=>{

      const id=req.query.id
      res.send("This page contains the details of About Company!"+id)
})
app.get('/contact',(req,res)=>{
    res.send('this is a contact page')
})
app.get('/address',(req,res)=>{
    res.send('this page is directd to adress of the company')
})
app.use((req,res,next)=>{
    res.status(404).send('Error 404 page not found!')
})
app.listen(9000,'127.0.0.1')