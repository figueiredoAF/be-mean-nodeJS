var date = (new Date).toJSON();

const http = require('http');
const url = require('url');

var server = http.createServer(function (req, res){
    console.log('Request URL: ', req.url);

    var result = url.parse(req.url,true);

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body>');
    res.write('<h1>Query String</h1>');
    res.write('<ul>'); 
    for(var key in result.query){
        res.write('<li>' + key + ' : ' + result.query[key] + '</li>');
    }
    res.write('</ul>');
    res.write('</html></body>');
    res.end();
});

server.listen(3000,function(){
    console.log('Servidor rodando em localhost:3000');
});