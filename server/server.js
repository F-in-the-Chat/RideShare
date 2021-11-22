//require every js file that runs a microservice to start all microservices at once
const eventBus = require("./eventbus")
const auth = require("../routes/auth/auth")
const create = require("../routes/createRide/createRide")
const get = require("../routes/getRide/getRide")
const cancel = require("../routes/cancelJoin/cancelJoin")
const del = require("../routes/deleteRide/deleteRide")
const join = require("../routes/joinRide/joinRide")
const db = require("../routes/db/db")
