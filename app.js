const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("server created");
    res.end("working")
});

server.listen(5000,"localhost", ()=>{
    console.log("Server is running on port 5000")
})

