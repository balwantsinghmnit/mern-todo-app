const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./model/todo");

//database
mongoose.connect("mongodb://localhost/mytodo",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("database connected"))
.then(err=>console.log(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 5000;


app.post("/addtodo",(req,res)=>{
    const todo = new Todo();
    todo.title = req.body.title;
    todo.save();
    res.json({id:todo._id});
});

app.get("/gettodos",async(req,res)=>{
    const todos = await Todo.find();
    res.json(todos);
});

app.post("/delete",async(req,res)=>{
    await Todo.findByIdAndDelete(req.body.id);
    res.send("done");
})


app.listen(PORT,()=>{
    console.log(`server is running on port no. ${PORT}`);
})