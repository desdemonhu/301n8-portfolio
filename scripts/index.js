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
  var click = 0;  ///number of times hamburger menu has been clicked
  var viewPort = $(window).width();

  $('.icon-menu').click(function(){
    click += 1;
    viewPort = $(window).width();

    if(click % 2 === 0){
      $('.navigation ul').css('display', 'none');
    } else if (viewPort < 400) {
      ///If the screen is less than 400px, it displays the menu vertically
      $('.navigation ul').css('display', 'block');
      $('.navigation li').css('display', 'block');
    } else {
      $('.navigation ul').css('display', 'inline');
      $('.navigation li').css('display', 'inline');
    }
  });
});
