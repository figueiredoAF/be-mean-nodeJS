var date = (new Date).toJSON();

const http = require('http');
const SUCCESS = {
    version:'1.0',
    name:'Be MEAN',
    returnes_at: date
};
const ERROR = {
    message: 'Error no Servidor'
};

var server = http.createServer(function (req, res){
    console.log('Request URL: ', req.url);
    if(req.url == '/api/v1'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify(SUCCESS));
    } else {
        res.writeHead(400,{'Content-Type':'application/json'});
        res.write(JSON.stringify(ERROR));
    }
    res.end();
});

server.listen(3000,function(){
    console.log('Servidor rodando em localhost:3000');
});



