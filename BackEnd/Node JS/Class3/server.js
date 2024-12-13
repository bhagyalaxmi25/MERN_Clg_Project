const https = require("https");
const fs = require ("fs");
const os = require ("os");
const path = require ("path");


// create server
const server = https.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200);
        res.end("Home Page");
    }
});


// Server listening
server.listen(2925, () => {
    console.log("Server is running on 2925");
    
});
