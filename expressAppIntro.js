const express = require('express');

// express app
const myApp = express();

// listen for request
myApp.listen(3000);

myApp.get('/', (req, res) => {
// in express we can still use the res.write(); and the res.end(); if we like, but it is not necessary in express. instead, use res.send().
// when you use res.send(), you don't need the " res.writeHead(200, {'Content-Type': 'text/html'}); " res.send() will automatically take care of that.
// res.send() will automatically set the content-type and the status code.
// res.send('<h1>Hello World</h1>');

//          -------------------------------
// we need to specify the absolute path of where the below path ('./views/Reveals/index.html') is relative from. in this case it is the root of the project
// in the below {__dirname} gets us the absolute path of where('./views/Reveals/index.html') is relative from.
res.sendFile('./views/index.html', {root: __dirname});
});

myApp.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {root: __dirname});
});

//------------redirects--------
myApp.get('/about-us', (req, res) => {
  res.redirect('./about');
});

// -----------404 page---------
// Note:  the " myApp.use()" 404 page should be placed at the end of the routes so that the server can look through all other routes.
// if it is not, every route that comes after '/404' will also trigger
// NOTE: if the url the user has reqested in the browser matches any of the above, the callback function will be fired and response will be sent back to the browser and Express will not carry on down the next request even if they match.
// If it doesn't match Express carry on and check the next request, if they match the callback will be fired. if they don't it carries on to the next down.
// if none of the url above matches and the code reaches the use(), because use() is not scope to any incoming url, the use() will fire the callback and the below 404 page will be sent back to the browser.
//Though it will work without the error status code. We should let Express know it is for error page by manually adding the error status code status(404).
// myApp.use((req, res) => {
//   res.status(404).sendFile('./views/404.html', {root: __dirname});
// });
