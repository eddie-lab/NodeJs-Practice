 // Creating webserver using Http module
 
 const http = require('http')

 const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to my homepage')
    }
    if (req.url ==='/about'){
        res.end('Here is our short history')
    }
// if user tries to access a resource that does not exist

    res.end(`<h1>Ooops!</h1>
    <p> We cannot seem to find the page you are looking for</p>
    <a href = "/"> back home</a>
    `)
 
 })

 server.listen(5000)
