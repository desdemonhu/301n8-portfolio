'use strict';
var portfolio = portfolio || {};

(function(app){
  var gallerycontroller = {};
  gallerycontroller.init = () => {
    portfolio.imageGallery.fetchData(portfolio.imageGallery.galleryView);
    portfolio.navigationFunctions.mainNav('gallery');
  }
  app.gallerycontroller = gallerycontroller;
})(portfolio);
