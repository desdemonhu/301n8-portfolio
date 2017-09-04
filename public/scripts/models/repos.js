var portfolio = portfolio || {};

(function(app){
  var repos = {};

  repos.repoTemplate = Handlebars.compile($('#repo-template').html());

  repos.fetchData = function(){
    $.ajax({
      url:'https://api.github.com/users/desdemonhu/repos',
      method:'GET',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .then(results =>{
      var modifiedResults = results.sort(function(a,b){
        let aDate = new Date(a['updated_at']);
        let bDate = new Date(b['updated_at']);
        return bDate - aDate;
      }).reduce(function(acc, value, index){
        if(index < 5){
          acc.push(value);
        }
        return acc;
      },[]);
      modifiedResults.forEach(repo =>{
        $('#repos').append(repos.repoTemplate(repo));
      })
    }, err =>{console.log(err);
    });
  }
  app.repos = repos;
})(portfolio);
