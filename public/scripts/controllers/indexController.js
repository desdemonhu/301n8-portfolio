'use strict';
var navigation = navigation || {};

var indexcontroller = {};
indexcontroller.init = () => {
  Project.fetchData(indexView.initIndexPage);
  navigation.navigationFunctions.mainNav('intro');
}
