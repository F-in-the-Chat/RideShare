const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const port = 5004;
var url = "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const client = new MongoClient(url);
//await client.connect();
client.connect();

const jwt = require("jsonwebtoken");
TOKEN_SECRET = F1n7hEcH47; //FInTheChat
const dotenv = require('dotenv');

dotenv.config();
process.env.TOKEN_SECRET;

app.listen(port, "0.0.0.0", () => {
    console.log(`Auth Server listening at http://localhost:${port}`);
});

app.post('/login', (req,res) => { 
    let username = req.body["user"];
    let secret = req.body["password"];
    try{
        let info = db.inventory.find({email:username}) //id, email, password
        //check username if username exists in database, checks password
        if (info.email!=username){
            throw new Error("Username doesn't exist")
        }
        if (info.password!=secret){
            throw new Error("Password doesn't match")
        }
    } catch (err){
        res.status().send(err);
    }
    try{
        // create token
        let coin = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
        db.collection('users').updateOne( { token: coin, tokenTimer: 1800 } ).then(function(result) {}) // I don't understand this then function thing but it was there
        res.send("Login successful");
        res.redirect('/getRide'); // redirects to join rides
    } catch (err){
        res.status().send(err);
    }

})

app.post('/signup', (req,res) => { //post request bc we are adding to database
    // check for username/email
    let username = req.body["user"];
    let secret = req.body["password"];
    try{
        let test = db.users.find({email:username})
        if(!isNull(test)){
            throw new Error("Username exists")
        }
    }
    catch (err){
        res.status().send(err);
    }
    try{
        let coin = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
        db.collection('users').InsertOne({
            email: username,
            password: secret,
            token: coin, 
            tokenTimer: 1800,
            driver: false,
            user: 01,
             } ).then(function(result) {})
        res.send({status: "Signup successful"});
        res.redirect('/getRide'); // redirects to join rides
    }
    catch (err){
        res.status().send(err);
    }
})

app.post('/logout', (req,res) => { 

    let username = req.body["user"];
    let coin = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
    try{
        if(coin!=db.inventory.find({email:username}).token){
            throw new Error("Token mismatched")
        }
        db.collection('users').updateOne( { token: "", tokenTimer: 0 } ).then(function(result) {})
        res.send({status: "Logout successful"});
    }
    catch (err){
        res.status().send(err);
    }
})