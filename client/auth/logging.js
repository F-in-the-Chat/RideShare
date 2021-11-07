const express = require("express");

const app = express();

// all might be post since token needs to be added and removed for login and logout respectively

app.get('.../login/', (req,res) => { // get request. we are only check with database, no changes made? maybe token
    // check for username/email 
    let username = req.body.username;
    let password = req.body.password;
    //check username if username exists in database
    // throw new Error("Username doesn't exist")
    try{
        // check password
        //throw new Error ("Password doesn't match")
    }
    catch (err){
        res.status().send(err)
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

    }
    catch (err){

    }
})