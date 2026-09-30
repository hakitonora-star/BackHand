const http=require('http'); // http module can help you to create http server

// we would like to setup a basic https server

const PORT =3000;
const server=http.createServer(async(req,res)=>{
    if(req.method=="GET"){
        res.end("GET request received😁");


    }
    else if(req.method=="POST"){
        // IN POST request ,let's send the response code as 201
        res.writeHead(201);
        //    res.writeHead(404);

         res.end("POST request received")
        

        
    }
    else{
        console.log("hello world");
    }

})

server.listen(PORT,()=>{
    console.log(`server is running means listining and running at PORT${PORT}`)
    //This starts the server and makes it listen for incoming requests on port 3000.

})