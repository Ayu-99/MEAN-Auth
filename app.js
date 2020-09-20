const express=require("express");
const path=require("path");
const bosyParser=require("body-parser");
const cors=require("cors");
const passport=require("passport-jwt");
const mongoose=require("mongoose");
const users=require("./routes/users.js");
const config=require("./config/database");

mongoose.connect(config.database);

mongoose.connection.on("connected",()=>{
    console.log("Connected to database "+config.database);
});


mongoose.connection.on("error",(err)=>{
    console.log("Database error"+err);
});

const app=express();

app.get('/', (req,res)=>{
    res.send("Invalid endpoint")
})



const port=5200;

app.listen(port, ()=>{
    console.log("Server started on port "+port);
});


app.use("/users", users);

app.use(express.static(path.join(__dirname,'src')));



//body-parser middleware
app.use(bosyParser.json());

app.use(cors);



require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

