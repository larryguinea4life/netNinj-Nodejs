const http = require('http');
const fs = require('fs');


const myServerName = http.createServer((req, res) => {

  let myPath = './views/';
  switch(req.url) {
    case '/':
      myPath += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      myPath += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default: 
      myPath += '404.html';
      res.statusCode = 404;
      break;
  }
  

  //res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile(myPath, (err, data) => {
    //res.writeHead(200, {'Content-Type': 'text/html'});
                 //OR
    res.setHeader('Content-Type', 'text/html')
    if (err) {
      console.log(err);
      res.end();
    } else {
      //if we are sending just a reponse, we can just pass it directly into res.end() if we like. It still does the same thing as res.write().
      //But if we are sending more that one request we use res.write() one after the other; (in this case res.write will be used more than once);
      //res.write(data);
      //res.end();
      res.end(data);
      //console.log(req.url, 'this');
    }
  });



});

//in the below the default value is localhost(so it is not necessary to type/add 'localhost' it is there by default). Also it is not compulsory to add the callback function.
myServerName.listen(8080, 'localhost', () => {
  console.log('My Server started on port 8080');
});




