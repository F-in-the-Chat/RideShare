## Create Ride Microservice

#### 1. Developer Name - Roshan Praveen Shetty

### 2. Overview of service:
#### This service aims to create rides where the person creating the ride is the one who owns the car and will also be the driver. The endpoint takes into consideration basic details which are as follows:

* Title: String Input (Required Field)
* Date: Date Input (Required Field)
* Pickup: String Input (Required Field)
* Dropoff: String Input (Required Field)
* Capacity: Int Input (Required Field)
* Price: Int Input (Required Field)
* Preferences: String Input

#### The request is as follows:

```
mutation{
  createRide(rideInput: {title: "Ride F", date:"2021-10-22T00:38:33.023Z", pickup:"Springfield", dropoff:"Boston", capacity: 5, price: 25, preferences: "No food"}) {
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
}
```

#### Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created