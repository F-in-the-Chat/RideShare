//don't delete yet, just need extra space- Eric

//express jwt source, https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

//node js, https://developer.okta.com/blog/2018/11/13/create-and-verify-jwts-with-node
//const jwt = require('njwt')
//const claims = { iss: 'fun-with-jwts', sub: 'AzureDiamond' }
//const token = jwt.create(claims, 'top-secret-phrase')
//token.setExpiration(new Date().getTime() + 60*1000)
//res.send(token.compact())

/* "Search";search;

function search(event){
    const query = {email:event.data}
    let userInfo = (db.collection('logging').find(query))
    return userInfo
}

function createUser(event){
    let start = event.data.start;
    const user = {
        email:start.email, 
        password:start.password, 
        token: start.token, 
        tokenTimer: start.tokenTimer,
        driver: start.driver, 
        user: start.user
    }
    db.collection('users').InsertOne(user);
}

function deleteToken(event){
    
}

/* async function dbSearch(user){
    const db = await client.connect();
    const query = {email:user}
    let userInfo = (db.collection('logging').find(query))
    //let info = db.inventory.find({email:username}) //id, email, password
    client.close()
    console.log(user)
    return userInfo
} */

  app.post("/login", (req, res) => {
    //let username = "gg@gmail.com";//req.body["email"];
    //let secret = "getRekted";//req.body["password"];
    //console.log(req.body);
    try {
      //check username if username exists in database, checks password
      eventHelper.sendEvent("Search", username);
      //console.log(info)
    } catch (err) {
      console.log(err)
      res.status(400).send(err);// invalid input
    }
      // create token
      //let coin = jwt.sign({email:"gg@gmail.com"}, "" + process.env.TOKEN_SECRET, {expiresIn: 1800}); // works now, first needs to be object, second to be made into string, and expireIn
      //db.collection("users").updateOne({ token: coin, tokenTimer: 1800 }).then(function (result) {}); // I don't understand this then function thing but it was there
      res.status(200).send("Login successful");
      //res.redirect('/getRide'); // redirects to join rides
  }); 

  async function logging(event){
    let info = await User.findById(event.data.email).exec();
    if (info.email != event.data.email) {
      throw new Error("Username doesn't exist");
    }
    if (info.password != event.data.password) {
      throw new Error("Password doesn't match");
    }
    let coin = generateToken();
    info.token.push(coin);
    info.save();
  }


  async function search(event) {
    let email = event.data;
    let userInfo = await User.findOne({ email }, function (err, myUser) {
      if (!err) console.log("step2");
      else console.log(err.message);
    });
    console.log(userInfo);
    return userInfo;
  }
  
  // function createUser(event) {
  //   let start = event.data.start;
  //   const user = {
  //     email: start.email,
  //     password: start.password,
  //     token: start.token,
  //     tokenTimer: start.tokenTimer,
  //     driver: start.driver,
  //     user: start.user,
  //   };
  //   console.log(user);
  //   Logs.InsertOne(user);
  // }

//const { MongoClient } = require("mongodb");
//var url = "mongodb+srv://testlogin.taf1q.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
//const client = new MongoClient(url);

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const {check, validationResult } = require("express-validator");

// var jwtSecret = "F1n7hEcH47"; //FInTheChat
// //require("dotenv").config();

// const eventHelper = require("../../server/eventHelper");
// //const { Router } = require("express");

// app.listen(port, "0.0.0.0", () => {
//   console.log(`Auth Server listening at http://localhost:${port}`);
// });

// //@route POST /signup
// //@access Public
// router.post("/signup", [
//   check("email", "Please provide valid email").isEmail(),
//   check("password", "Please Enter a password").isLength({ min: 1}),
// ],
// async (req, res) => {
//   const errors = validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array() })
//   }
//   const {email, password} = req.body;
//   try {
//     //let info = eventHelper.sendEvent("Search", username);
//     let user = await User.findOne({ email });
//     if (user) {
//       res.status(400).json({ errors: [{msg: "User already exists"}]})
//     }
//     user = new User({
//       email,
//       password,
//     });

//     const salt = await bcrypt.genSalt(10);

//     start.password = await bcrypt.hash(password, salt);

//     await start.save();

//     const payload = {
//       user: {
//         id: user.id,
//       }
//     }
//     jwt.sign(payload, jwtSecret, {expiresIn: 360000}, (err,token) => {
//       if (err) throw err;
//       res.json({ token });
//     });

//     //eventHelper.sendEvent("createUser", start);
//     console.log("Signup successful");

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error")
//   }
// });

// app.get("/auth", async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   }
//   catch (err) {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error")
//   }
// })

// router.post("/login", [
//   check("email", "Please provide valid email").isEmail(),
//   check("password", "Password is required").exists(),
// ],
// async (req, res) => {
//   const errors = validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array() })
//   }
//   const {email, password} = req.body;
//   try {
//     let info = eventHelper.sendEvent("Search", username);
//     // let user = await User.findOne({ email });
//     if (!info) {
//       return res.status(400)
//       .json({errors: [{ msg: "Invalid Credentials"}]});
//     }

//     const isMatch = await bcrypt.compare(password, start.password);

//     if(!isMatch){
//       return res.status(400)
//       .json({errors: [{ msg: "Invalid Credentials"}]});
//     }

//     const payload = {
//       start: {
//         id: start.id,
//       }
//     }
//     jwt.sign(payload, jwtSecret, {expiresIn: "5 days"}, (err,token) => {
//       if (err) throw err;
//       res.json({ token });
//     });
//   } catch {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error")
//   }
// });

// app.post("/logout", (req, res) => {
//   let username = req.body["user"];
//   let coin = jwt.sign({email:"gg@gmail.com"}, "" + process.env.TOKEN_SECRET, {expiresIn: 1800});
//   try {
//     let info = eventHelper.sendEvent("Search", username);
//     if (coin != info.token) {
//       throw new Error("Token mismatched");
//     }
//     eventHelper.sendEvent("deleteToken", username);
//     res.send({ status: "Logout successful" });
//   } catch (err) {
//     res.status(424).send(err);
//   }
// });

// app.post("/events", (req, res) => {
//   console.log(req.body);
//   res.send({ status: "OK" });
// });

// module.exports = router;

/*  router.post("/login", [
    check("email", "Please provide valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array() })
    }
    const {email, password} = req.body;
    try {
      let info = eventHelper.sendEvent("Search", username);
      // let user = await User.findOne({ email });
      if (!info) {
        return res.status(400)
        .json({errors: [{ msg: "Invalid Credentials"}]});
      }
  
      const isMatch = await bcrypt.compare(password, start.password);
  
      if(!isMatch){
        return res.status(400)
        .json({errors: [{ msg: "Invalid Credentials"}]});
      }
  
      const payload = {
        start: {
          id: start.id,
        }
      }
      jwt.sign(payload, jwtSecret, {expiresIn: "5 days"}, (err,token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch {
      console.error(err.message);
      res.status(500).send("Internal Server Error")
    }
  }); */