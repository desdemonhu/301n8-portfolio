'use strict';
var navigation = navigation || {};

var indexcontroller = {};
indexcontroller.init = () => {
  Project.fetchData(indexView.initIndexPage);
  navigation.navigationFunctions.mainNav('intro');
}

indexcontroller.initProjects = () => {
  if(projects.length === 0){
    indexcontroller.init();
  }
  navigation.navigationFunctions.mainNav('content-placeholder');
}

indexcontroller.initAbout = () => {
  navigation.navigationFunctions.mainNav('about');
}
