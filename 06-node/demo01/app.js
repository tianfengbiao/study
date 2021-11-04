var http = require('http');
var fs = require('fs')
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'image/jpeg;charset=utf-8'});
  fs.readFile('./sd.jpg', function(err, data){
    // response.write('少丹吃屁dddd')
    if(err) {
      console.log('===')
      response.end('出错了');
      return;
    }
    console.log('===成功了')
    

    response.end(data);
    
  })
  // response.write('少丹吃屁dddd')
  // response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

