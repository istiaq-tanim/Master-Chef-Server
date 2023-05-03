const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors());
const port = process.env.PORT || 5000;

const chefs=require("./data/chefs.json")

app.get("/",(req,res)=> {
    res.send("Chef is Running")
})


app.get("/chefs",(req,res)=> {
    res.send(chefs);
})

app.get("/chefs/:id",(req,res)=>{
    const chefId=parseInt(req.params.id);
    const chefData=chefs.find(item => parseInt(item.id) === chefId);
    res.send(chefData);
})

app.listen(port,()=>{
    console.log(`Chef is running at ${port}`)
})