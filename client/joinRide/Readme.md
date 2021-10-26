## Join Ride Microservice

### 1. Developer Name - Jared Pina

### 2. Overview of service:
#### This service allows riders to join rides that have been created by a driver:

* User Id: Numbe identifying the user trying to join the ride (Required Field)
* Ride Id: Number identifying the ride the user is trying to join (Required Field)

#### The request is as follows:

```
mutation{
  createRide(rideInput: {ride : 24, user : 42}) {
    ride
    user
  }
}
```


### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created