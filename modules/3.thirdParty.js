const express = require("express")
const app = express()

const PORT = 3001

app.get("/", function(req, res){
    res.send("Welcome to express API")
})

app.get("/user", function(req, res){
    res.send("Here is your user data")
})

app.get("/employee", function(req, res){
    res.send("Here is your employee data")
})

app.get("/*", function(req, res){
    res.send("Please contact administartor")
})


app.listen(PORT, function(){
    console.log(`Server is listening at PORT ${PORT}`)
})

