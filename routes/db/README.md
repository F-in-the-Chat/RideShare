## Database Microservice

### 1. Developer Name - Roshan Praveen Shetty, Jared Pina, Eric Lee

### 2. Overview of service: 

#### This service aims to establish a database connection for the rides and users and their respective endpoints. Using the functions for each endpoint, the data is collected and passed onto the `eventHelper` for it communicate using the eventbus.

#### The request is as follows:

```
const eventHandlers = {
  test: testEventHandler,
  createRide: createRide,
  Search: search,
  createUser: createUser,
  deleteToken: deleteToken,
  getRide: getRide,
  "joinRide":joinRide,
};

app.listen(port, "0.0.0.0", () => {
    console.log(`Database listening at http://localhost:${port}`);
});

```

### 3. Basic Status codes are used for this end:
* 500: Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.