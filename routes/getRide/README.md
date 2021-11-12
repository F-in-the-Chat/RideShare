## Delete Ride Microservice

### 1. Developer Name - Roshan Praveen Shetty

### 2. Overview of service:

#### This service displays all the rides. The endpoint requires no input:

#### The request is as follows:

```
app.get('/getRide', (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
})
```

### 3. Basic Status codes are used for this end:

* 500: Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.