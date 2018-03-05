const http = require('http');

const requestOptions = {
    host:'www.google.com',
    path:'/?gws_rd=cr&dcr=0&ei=nsWdWpWoLdKO5wKO6zU'
};

function requestCallback(res){
    console.log('Request result - STATUS: ' + res.statusCode);
    console.log('Request result - HEADERS: ' + JSON.stringify(res.headers));

    let data = '';
    
    res.setEncoding('utf8');
    res.on('data',function(newData){
        data += newData;
    });    
    res.on('end',function(){
        console.log('Request result - DATA:', data);
    });
};

const req = http.request(requestOptions, requestCallback);
req.on('error', function(e){
    console.log('Request error: ' + e);
});
req.end();