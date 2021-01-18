//require the modules(express)
const express = require("express")
const bodyParser = require("body-parser")
// init express
const app = express()
const port = process.env.port || 2222;

//Requiring the modules
const order = require('./Order_Module')
const pool_connection = require('../DB_Part/dbPool')
const pool = pool_connection()

// json handler
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


//Requests of specific service

app.get('/api', async function (req, res) {
  try {
    res.sendfile("main.html");
  } catch (e) {
    console.log(e)
    res.status(404).json({
        message : "Page not found "
    })
  }
 });



app.listen(port,() => {
  console.log("Started on PORT "+port);
})
