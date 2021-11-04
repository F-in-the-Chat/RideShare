/* //previous work from a different course so good starting spot
$('#login').on('submit', function (e) {
    e.preventDefault();
    let mail = $('#email').val();
    let secret = $('#pass').val();
    $.ajax({
        type: "POST",
        url:  "/login",
        data: {email: mail, password: secret},
        success:function(response){
            console.log(response);
            if (response.success) {
                // location.href = window.location.origin + "/" + response.userID + "/dashboard";
            }
            else {
                alert("Incorrect Email or Password")
            }
        },
        error: function (request, status, error) {
            alert("An error occurred, Please try again.");
        }                  
    });
}) */

const express = require("express");

const app = express();

// all might be post since token needs to be added and removed for login and logout respectively

app.get('.../login/', (req,res) => { // get request. we are only check with database, no changes made? maybe token
    // check for username/email 
    try{

    }
    catch (err){

    }
})

app.post('.../signup/', (req,res) => { //post request bc we are adding to database
    // check for username/email
    try{

    }
    catch (err){

    }
})

app.get('.../logout/', (req,res) => { // get request. we are only check with database, no changes made? maybe token
    try{

    }
    catch (err){

    }
})