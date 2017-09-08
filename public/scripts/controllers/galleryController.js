'use strict';
var portfolio = portfolio || {};

(function(app){
  var gallerycontroller = {};
  gallerycontroller.init = () => {
    if($('#gallery').children().length){
      portfolio.navigationFunctions.mainNav('gallery');
    }else {
      portfolio.imageGallery.fetchData(portfolio.imageGallery.galleryView);
      portfolio.navigationFunctions.mainNav('gallery');
    }
  }
  app.gallerycontroller = gallerycontroller;
})(portfolio);
