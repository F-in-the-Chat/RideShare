## Authentication Microservice

### 1. Developer Name - Eric

### 2. Overview of service:
#### This service aims to get ride information for a specific ride id. The endpoint takes into consideration basic details which are as follows:

* Title: String Input (Required Field)
* Date: Date Input (Required Field)
* Pickup: String Input (Required Field)
* Dropoff: String Input (Required Field)
* Capacity: Int Input (Required Field)
* Price: Int Input (Required Field)
* Preferences: String Input

#### The get rides request is as follows:

```
query{
  getRide(userInput: {_id: 0002}) {
    _id
    title
    date
    pickup
    dropoff
    capacity
    price
    preferences
  }
}
```

### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created
