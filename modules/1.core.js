const http = require("http")

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

http.createServer(function(req, res){
    console.log(req.url)
    if(req.url == '/') {
        res.end("<h1>Welcome to the world of NodeJS</h1>")
    } else if(req.url == '/user'){
        res.end("Here is your user data")
    } else if(req.url == '/employee') {
        res.end("Here is your employee data")
    } else {
        res.end("Please contact administartor")
    }
}).listen(1234)

