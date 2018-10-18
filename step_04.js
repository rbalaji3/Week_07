
//  Week 06 Express: Basic Routing
//  Step 04

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  let page = req.params.pages
  switch(page) {
    case "home":
      res.send("home")
      break
    case "about":
      res.send("about")
      break
    case "info":
      res.send("info")
      break;

  }
  res.sendFile(__dirname + '/public/index.html')
  
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html")
})

app.get("/help", (req, res) => {
  res.sendFile(__dirname + "/public/help.html")
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
