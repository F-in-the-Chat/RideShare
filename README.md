## Delete Ride Microservice

### 1. Developer Name - Rishab Maheshwari

### 2. Overview of service:

#### This service aims to delete rides incase the driver does not want that group any longer. The endpoint requires:

* creatorID: int (Required Field)

#### The request is as follows:

```
mutation{
  deleteRide(rideInput: "sdfrweirw0e234234"}) {
    ride
    user
  }
}
```

### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created
