const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
// const opn = require('opn'); //for opening in browser
// const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 4000;

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.use(express.static('public'));

app.get('/github/*', proxyGitHub);

app.get('/*', function(there, backAgain) {
  backAgain.sendFile('index.html', {root: './public'});
});

// opn(`http://localhost:${PORT}`);  ///automatically opens in default browser

// // (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
// app.get('/new', function(req, res){
//   res.redirect('new.html');
// })

// app.post('/articles', bodyParser, function(request, response) {
//   // REVIEW: This route will receive a new article from the form page, new.html,
//   // and log that form data to the console. We will wire this up soon to actually
//   // write a record to our persistence layer!
//   console.log(request.body);
//   response.send('Record posted to server!!');
// })

app.listen(PORT, function() {
  // lets you know which port your server has started on
  console.log(`Port Number: ${PORT}`);
});
