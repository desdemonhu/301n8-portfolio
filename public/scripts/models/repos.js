var portfolio = portfolio || {};

(function(app){
  var repos = {};

  repos.repoTemplate = Handlebars.compile($('#repo-template').html());

  repos.fetchData = function(){
    $.ajax({
      url:'https://api.github.com/users/desdemonhu/repos',
      method:'GET',
      headers: {
        'Authorization': `token ${gitHubToken}`
      }
    })
    .then(results =>{
      results.forEach(repo =>{
        $('#repos').append(repos.repoTemplate(repo));
      })
    }, err =>{console.log(err);
    });
  }
  app.repos = repos;
})(portfolio);
