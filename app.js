var express=require('express')

const app=express()

app.get('/',(req,res)=>{
    var name=req.query.name
    var dept=req.query.dept
    var company=req.query.company
if(name && dept && company){
        res.send(name +" working in "+dept+ " department at " +company)
    }
 else if(name && !company && !dept) {
     res.send("Hello " + name)
 }  
    else{ res.send("Hello world!")
}
})
app.get('/home',(req,res)=>{
     res.send("This is a Home page")
})
app.get('/about',(req,res)=>{
  res.send("This page contains the details of About Company!")
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
app.listen(9000)
