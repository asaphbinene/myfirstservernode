require("http").createServer((ktbRequest, ktbResponse) => 
{
    ktbResponse.end("Welcome to Katbin.com server 001");
}).listen(7724);