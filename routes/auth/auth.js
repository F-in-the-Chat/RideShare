const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
var url = "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const client = new MongoClient(url);
await client.connect();

const jwt = require("jsonwebtoken");
TOKEN_SECRET = F1n7hEcH47; //FInTheChat
const dotenv = require('dotenv');

dotenv.config();
process.env.TOKEN_SECRET;

app.post('.../login/', (req,res) => { // get request. we are only check with database, no changes made? maybe token
    let username = req.body["user"];
    let secret = req.body["password"];
    //let username = "gg@gmail.com";
    //let secret = "getRekted";
    try{
        let info = db.inventory.find({email:username}) //id, email, password
        //check username if username exists in database
        if (test.email!=username){
            throw new Error("Username doesn't exist")
        }
        if (test.password!=secret){
            throw new Error("Password doesn't match")
        }
    } catch (err){
        res.status().send(err);
    }
    try{
        // create token
        let coin = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
        // db.collection('inventory').updateOne( { token: coin } ).then(function(result) {})
        res.send({status: "Login successful"});
    } catch (err){
        res.status().send(err);
    }

})

app.post('.../signup/', (req,res) => { //post request bc we are adding to database
    // check for username/email
    let username = req.body.username;
    let password = req.body.password;
    //check username if username exists in database
    // throw new Error("Username already exist")
    try{

    }
    catch (err){

    }
})

app.post('.../logout/', (req,res) => { 
    // let token = req.body.token
    // throw new Error("Logout unsuccessful")
    try{
        //req.isAuth = false;
    }
    catch (err){
        
    }
})