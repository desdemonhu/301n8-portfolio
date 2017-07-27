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
    click += 1;
    if(click % 2 === 0 ){
      $('.navigation ul').css('display', 'none');
      console.log(click);
    }else {
      $('.navigation ul').css('display', 'inline');
    }
  });
});
