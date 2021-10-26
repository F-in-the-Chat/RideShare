## Cancel Ride Microservice

### 1. Developer Name - Sihan Cheng

### 2. Overview of service:
#### This service aims to cancel rides where the person has already held a joining ride but wants to cancel, basic details which are as follows:

* joiningId: The id of the joining request.


#### The request is as follows:

```
mutation {
    cancelJoin(joiningId: "61721e1f05f81d6ab398414d"){
    _id
    title
    }
}
```

### 3. Basic Status codes are used for this end:

* 200: OK success status response code indicates that the request has succeeded
* 201: The request has been fulfilled and resulted in a new resource being created