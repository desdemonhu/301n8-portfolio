var portfolio = portfolio || {};

(function(app){
  var repos = {};

  repos.repoTemplate = Handlebars.compile($('#repo-template').html());

  repos.fetchData = function(){
    // TODO: This added the whole array each time you go to the page. But if you refresh it's fine. Fix this!
    if(!($('#repos').children().length)){
      $.get('/github/users/desdemonhu/repos')
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
  }
  app.repos = repos;
})(portfolio);
