## Authentication Microservice

### 1. Developer Name - Eric Li

### 2. Overview of service:
#### This service aims to allow users to sign up, login and logout of the service. Focused on login for now. The endpoint takes into consideration basic details which are as follows:

* email: String Input (Required Field)
* password: String Input (Required Field)
* token: String
* tokenExpiration: Int
* driver: boolean
* userId: Int

#### The login request is as follows:

```
app.post("/login", (req, res) => {
    //check username if username exists in database, checks password
    eventHelper.sendEvent("logging", req.body,(response)=>{
      res.send(response.data.response_data)
    });
});
```

#### Once this information is taken, the data is then passed and stored in the following format:

```
{
    {"_id":{"$oid":"61a9239fae5dcce8c0a0bead"},
    "email":"1234@gmail.com",
    "password":"$2a$10$06iawG6C/PytfZGDKkdtjOeb6nHavRMzpiQpsW8X6Zx5lwmhI3d3W",
    "driver":false,"__v":{"$numberInt":"0"},
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE5MjM5ZmFlNWRjY2U4YzBhMGJlYWQiLCJpYXQiOjE2Mzg0NzUyODZ9.sLcRCTNhs3H5wmIwyohuS53nESn0FCbviEj79SLGPwg"}
}
```

### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created
