'use strict';

var navigationFunctions = {};

var navigationString = '<ul><li data-content="intro"><a href="#">Home</a></li><li data-content="about"><a href="#">About</a></li><li data-content="content-placeholder"><a href="#">Project Portfolio</a></li></ul>'

var socialMediaString = '<ul><li><a href="https://github.com/desdemonhu" target="_blank">GitHub<a></li><li><a href="https://www.linkedin.com/in/raegan-millhollin-2a3647b" target="_blank">Linkedin</a></li><li><a href="http://desdemonhu.deviantart.com/" target="_blank">DeviantArt</a></li></ul>'

///hamburger menu closes if you click it a second time
navigationFunctions.hamburgerMenu = function(){
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
}

navigationFunctions.mainNav = function(){
  $('.navigation').on('click', 'li', function(e){
    e.preventDefault();
    $('.tab-content').children().hide();
    $('.tab-content').children(`#${$(this).data('content')}`).fadeIn();
    // $(`#${contentType}`).fadeIn();
  });
}

$(document).ready(function(){
  navigationFunctions.hamburgerMenu();
  $('.navigation').html(navigationString);
  $('.navigation-social').html(socialMediaString);
  navigationFunctions.mainNav();
});
