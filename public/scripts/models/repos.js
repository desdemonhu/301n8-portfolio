var portfolio = portfolio || {};

(function(app){
  var repos = {};

  repos.fetchData = function(){
    $.ajax({
      url:'https://api.github.com/users/desdemonhu/repos',
      method:'GET',
      headers: {
        'Authorization': `token ${gitHubToken}`
      }
    })
    .then(results =>{console.log(results)}, err =>{console.log(err);
    });
  }
  app.repos = repos;
})(portfolio);
