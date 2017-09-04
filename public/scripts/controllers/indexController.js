'use strict';
var portfolio = portfolio || {};

(function(app){
  var indexcontroller = {};
  indexcontroller.init = () => {
    portfolio.Project.fetchData(portfolio.indexView.initIndexPage);
    portfolio.navigationFunctions.mainNav('intro');
  }

  indexcontroller.initProjects = () => {
    if(portfolio.projects.length === 0){
      indexcontroller.init();
    }
    portfolio.repos.fetchData();
    portfolio.navigationFunctions.mainNav('content-placeholder');
  }

  indexcontroller.initAbout = () => {
    portfolio.navigationFunctions.mainNav('about');
  }
  app.indexcontroller = indexcontroller;
})(portfolio);
