require("http").createServer((ktbRequest, ktbResponse) => 
{
    const ktbRequestModule = require("request");
    ktbRequestModule(
        "http://worldtimeapi.org/api/timezone/America/New_York",
        function(ktbErr, ktbReply, ktbContent) 
        {
            ktbResponse.end(`<h1>Welcome to Katbin.com server 001:</h1> 
            <p> ${ktbContent} </p>`);
        }
    );
    
}).listen(7724);