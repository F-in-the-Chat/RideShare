## Authentication Microservice

### 1. Developer Name - Eric Li

### 2. Overview of service:
#### This service aims to allow users to sign up, login and logout of the service. Focused on login for now. The endpoint takes into consideration basic details which are as follows:

* email: String Input (Required Field)
* password: String Input (Required Field)
* userId: Int
* token: String
* tokenExpiration: Int
* driver: boolean

#### The login request is as follows:

```
query{
    login(email:"gg@gmail.com", password:"getrekt") {
        userId
        token
        tokenExpiration
    }
}

mutation{
  createUser(userInput: {email:"gg@gmail.com", password:"getrekt"}) {
    userId
    email
  }
}
{
  "errors": 
  [{"message": "User already exists."}]
} 
```

#### Once this information is taken, the data is then passed and stored in the following format:

```
{
    "email": "gg@gmail.com",
    "password": "getrekt",
    "userId": 007,
    "token": "asdjhiowwandjncei72q98erhfdjsbaw",
    "tokenExpiration": 2,
    driver: True
}
```

### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created