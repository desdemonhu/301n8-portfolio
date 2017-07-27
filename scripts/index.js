'use strict';
///array of all projects
var projects = [];
///constructor function for project information
function Project(name, url, image, description){
  this.name = name;
  this.url = url;
  this.image = image;
  this.description = description;

  ///automatically push new one to the array
  projects.push(this);
}


///hamburger menu closes if you click it a second time
$(document).ready(function(){
  var click = 0;

  $('.icon-menu').click(function(){
    var $viewPort = $(window).width();
    click += 1;
    if(click % 2 === 0){
      $('.navigation ul').css('display', 'none');
    } else if ($viewPort < 400) {
      $('.navigation ul').css('display', 'block');
      $('.navigation li').css('display', 'block');
    } else {
      $('.navigation ul').css('display', 'inline');
      $('.navigation li').css('display', 'inline');
    }
  });
});
