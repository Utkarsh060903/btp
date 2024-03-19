const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb+srv://utkarsh:Utkarsh@123@cluster0.ysagoei.mongodb.net/' , () => {
    console.log("db is connected")
})

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://utkarsh:Utkarsh@123@cluster0.ysagoei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/");
        console.log(`mongodb connect success : ${con.connection.host}`);

    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}

connectDB();

const userSchema = new mongoose.Schema({
    name : String, 
    email : String,
    password : String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(9002,() => {
    console.log("BE started at port 9002")
})
