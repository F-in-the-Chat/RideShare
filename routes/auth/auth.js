const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
// var url = ;
//https://cloud.mongodb.com/v2/618ad7b544c69666db2fb5d5#clusters/detail/testLogin
// all might be post since token needs to be added and removed for login and logout respectively
// add jwt token to this, look at middleware
const jwt = require("jsonwebtoken");


app.get('.../login/', (req,res) => { // get request. we are only check with database, no changes made? maybe token
    //let username = req.body["user"];
    //let secret = req.body["password"];
    let username = "gg@gmail.com";
    let secret = "getRekted";
    
    try{
        //db.inventory.find({email:username})
        //check username if username exists in database
        if (test.email!=username){
            throw new Error("Username doesn't exist")
        }
        if (test.password!=secret){
            throw new Error("Password doesn't match")
        }
        // create token
        // db.collection('inventory').updateOne( { token: "paper" } ).then(function(result) {})
        // process result

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

app.get('.../logout/', (req,res) => { // get request. we are only check with database, no changes made? maybe token
    // let token = req.body.token
    // throw new Error("Logout unsuccessful")
    try{
        //req.isAuth = false;
    }
    catch (err){
        
    }
})