const port = 4000
const express = require('express')
const app = express()
const { random, serverInit } = require('./modules/util')

app.get()

/************* server start *************/
app.listen(port, serverInit(port))