'use strict';
var portfolio = portfolio || {};

(function(){
  portfolio.imageGallery.fetchData = callback => {
    if(!($('#gallery').children().length)){
      $.getJSON('data/gallery.json')
        .then(data => {
          ///get images for gallery
          portfolio.GalleryPicture.loadProjects(data);
          // imageGallery.sortImages();
          portfolio.imageGallery.galleryDisplay();
          callback();
        })
    }
  }
})(portfolio);
