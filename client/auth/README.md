## Authentication Microservice

### 1. Developer Name - Eric Li

### 2. Overview of service:
#### This service aims to allow users to sign up, login and logout of the service. Focused on login for now. The endpoint takes into consideration basic details which are as follows:

* email: String Input (Required Field)
* password: String Input (Required Field)
* userId: Int
* token: String
* tokenExpiration: Int

#### The login request is as follows:

```
query{
    login(email:"gg@gmail.com", password:"getrekt") {
        userId
        token
        tokenExpiration
    }
}
```

#### Once this information is taken, the data is then passed and stored in the following format:

```
{
    "_id": "617208e33b1d1060b549484e",
    "title": "Ride F",
    "date": "2021-10-22T00:38:33.023Z",
    "pickup": "Springfield",
    "dropoff": "Boston",
    "capacity": 5,
    "price": 25,
    "preferences": "No food"

    "email": "gg@gmail.com"
    "password": "getrekt"
    "userId": 007
    "token": "asdjhiowwandjncei72q98erhfdjsbaw"
    "tokenExpiration": 2
}
```

### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created