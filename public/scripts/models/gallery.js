'use strict';
var imageGallery = imageGallery || {}

imageGallery.fetchData = callback => {
  $.getJSON('data/gallery.json')
    .then(data => {
      ///get images for gallery
      GalleryPicture.loadProjects(data);
      // imageGallery.sortImages();
      imageGallery.galleryDisplay();
      callback();
    })
}
