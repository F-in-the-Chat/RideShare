//don't delete yet, just need extra space- Eric

//express jwt source, https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

//node js, https://developer.okta.com/blog/2018/11/13/create-and-verify-jwts-with-node
//const jwt = require('njwt')
//const claims = { iss: 'fun-with-jwts', sub: 'AzureDiamond' }
//const token = jwt.create(claims, 'top-secret-phrase')
//token.setExpiration(new Date().getTime() + 60*1000)
//res.send(token.compact())

"Search";search;

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