const express = require('express');
const app = express();
// const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 4000;


app.use(express.static('public'));

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
