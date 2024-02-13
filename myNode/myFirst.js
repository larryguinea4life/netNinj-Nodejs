//“require” in node.js is like saying "import" in javascript;
const http = require('http');
const url  = require('url');
const fs = require('fs');

//-----------------------------Getting Started------------------------------------------------------------------------------
// The callback function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
// http.createServer((req, res) => {
//  res.writeHead(200, {"Content-Type": "text/html"});
//  res.end("Hello World!");
// }).listen(8080);


//-----------------------------importing module------------------------------------------------------------------------------
//NOTE: I am importing from a file called myfirstmodule.js
// const xyz = require('./myfirstmodule'); //Whatever value that is exported in the module is what the importer (the importing file) will get or have access to. Also the importer doesn’t have to use the same variable or function name as exported from the exporting file
// console.log(xyz.myDateTime(), xyz.people);
// const {myDateTime, people} = require('./myfirstmodule'); //It can also be destructured like this

// http.createServer( function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(xyz.myDateTime());
//     res.end('Hurray! This computer now works as a server!', console.log('testing...', req.url));
//   }).listen(8080);
//-----------------------------------------------------------------------------------------------------------


// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log("protocol:", q); //returns the full object
// console.log("host:", q.host); //returns 'localhost:8080'
// console.log("pathname:", q.pathname); //returns '/default.htm'
// console.log("search:", q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'
// the above code is written like that because it will be deplay in the console and not in the browser
// ---------------------------------------------------------------------------

// this is the url to enter in the browser for the code below to work: http://localhost:8080/?year=2017&month=July&day=Monday
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   /*Use the url module to turn the querystring into an object:*/
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = `${q.year} ${q.month} ${q.day} ${req.url}`;
//   res.write("txt: " +  txt);
//   console.log("reqqqqqqqq:", req)
  
// }).listen(8080);



// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   /*Use the url module to turn the querystring into an object:*/
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = `${q.year} ${q.month} ${q.day}`;
//   res.write("This is for port 8081")
  
// }).listen(8081);


// http.createServer(function(req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  fs.readFile('summer.html', (err, data) => {
//   res.write(data);
//   res.end();
//  });
// //  res.end();
// }).listen(8080)

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  console.log("pathname:", q.pathname);
  console.log("filename:", filename);
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text.html'});
    res.end(data)

  });
}).listen(8080)


// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8081);




// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'ademolaayodelemi@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });