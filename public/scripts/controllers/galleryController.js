'use strict';

var navigation = navigation || {};

var gallerycontroller = {};
gallerycontroller.init = () => {
  imageGallery.fetchData(imageGallery.galleryView);
  navigation.navigationFunctions.mainNav('gallery');
}
