const express=require('express')
const app=express()


const members=[
    {
        id:21,
        name:"Rajesh",
        stdClass:8
    },
    {
        id:34,
        name:'Bavesh',
        stdClass:8
    }
]

app.get('/adduser',(req,res)=>{
       res.send('Add user details in the URL')
})
app.get('/api/members',(req,res)=>{
       res.json(members)
})

app.listen(8080)