const express = require('express');
const app = express();
const carsRouter = require("./Routers/Cars");

app.use(express.json());
app.use('/cars', carsRouter)

const port = 4000;

app.listen(port, ()=>{console.log('listening on port 4000')})