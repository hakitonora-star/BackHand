const http=require('http'); // http module can help you to create http server
const { serverConfig } = require('./config');

// we would like to setup a basic https server


const server=http.createServer(async(req,res)=>{
    if(req.method=="GET"){
        res.end("GET request received😁");


    }
    else if(req.method=="POST"){
        // IN POST request ,let's send the response code as 201
        // res.writeHead(204);no response in 204
        //    res.writeHead(404);\
         res.writeHead(200);


         res.end("POST request receive")
        

        
    }
    else{
        console.log("NOT RECEIvED REQUEST");
    }

})

server.listen(serverConfig.PORT,()=>{
    console.log(`server is running means listining and running at PORT${PORT}`)
    //This starts the server and makes it listen for incoming requests on port 3000.

})
