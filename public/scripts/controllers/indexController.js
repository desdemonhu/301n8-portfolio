'use strict';
var portfolio = portfolio || {};

(function(app){
  var indexcontroller = {};
  indexcontroller.init = () => {
    portfolio.Project.fetchData(portfolio.indexView.initIndexPage);
    portfolio.navigationFunctions.mainNav('intro');
  }

  indexcontroller.initProjects = (ctx, next) => {
    if($('#content-placeholder .projects-displayed').length){
      portfolio.navigationFunctions.mainNav('content-placeholder');
    }else {
      indexcontroller.init();
      portfolio.repos.fetchData();
      portfolio.navigationFunctions.mainNav('content-placeholder');
      next();
    }
  }

  indexcontroller.initAbout = () => {
    portfolio.navigationFunctions.mainNav('about');
  }
  app.indexcontroller = indexcontroller;
})(portfolio);
