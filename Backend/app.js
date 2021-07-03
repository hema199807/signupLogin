const express=require("express");
const bodyparser=require('body-parser');

const mongoose=require("mongoose");
const appRouter=require("./Routes/router");
const port=300;
const hostname="localhost";

const app=express();

app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Headers','content-type,Authurization');
    next();
})
app.use("/",appRouter);

mongoose.connect('mongodb+srv://root:Deva@123@cluster0.29oaz.mongodb.net/RestaurantDb?retryWrites=true&w=majority',
    {useNewUrlParser:true,useUnifiedTopology:true,dbName:"UserDb"}
).then(res=>{
      app.listen(port,()=>{
    console.log(`server runing at http://${hostname}:${port}/ `);
    })
  }).catch(err=>console.log(err))
