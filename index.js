const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefs=require("./data/chefs.json")

app.get("/",(req,res)=> {
    res.send("Chef is Running")
})

app.listen(port,()=>{
    console.log(`Chef is running at ${port}`)
})