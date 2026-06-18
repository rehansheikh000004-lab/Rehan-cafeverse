require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {

console.log("MongoDB Connected");

})
.catch(err => {

console.log(err);

});

app.get("/", (req,res)=>{

res.send("CAFEVERSE API RUNNING");

});

/* SIGNUP */

app.post("/signup", async(req,res)=>{

try{

const {username,password} = req.body;

const existingUser =
await User.findOne({username});

if(existingUser){

return res.status(400).json({
message:"User already exists"
});

}

const hashedPassword =
await bcrypt.hash(password,10);

const user =
new User({

username,
password:hashedPassword

});

await user.save();

res.json({
message:"Signup Successful"
});

}

catch(error){

res.status(500).json({
message:"Server Error"
});

}

});

/* LOGIN */

app.post("/login", async(req,res)=>{

try{

const {username,password} = req.body;

const user =
await User.findOne({username});

if(!user){

return res.status(400).json({
message:"User Not Found"
});

}

const match =
await bcrypt.compare(
password,
user.password
);

if(!match){

return res.status(400).json({
message:"Wrong Password"
});

}

res.json({

message:"Login Successful"

});

}

catch(error){

res.status(500).json({
message:"Server Error"
});

}

});

app.listen(5000,()=>{

console.log(
"Server running on 5000"
);

});
