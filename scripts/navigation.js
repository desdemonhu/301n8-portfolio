'use strict';

var navigationFunctions = {};

var navigationString = '<ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Project Portfolio</a></li></ul>'

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

navigationFunctions.portfolioClick = function(){
  $('li:contains("Project")').on('click', function(event){
    event.preventDefault();
    $('#filter-language').show();
    $('#project-feature').hide();
    $('#intro').hide();
    $('#footer').prev().hide();
    $('#footer').hide();
    ///Shows project list
    $('#content-placeholder').fadeIn('slow');
  })
}

navigationFunctions.homeClick = function(){
  $('li:contains("Home")').on('click', function(event){
    event.preventDefault();
    $('#intro').show();
    $('#intro').find('img').show();
    $('#project-feature').show();
    $('#footer').prev().show();
    $('#footer').show();
    $('#content-placeholder').hide();
  });
}

navigationFunctions.aboutClick = function(){
  $('li:contains("About")').on('click', function(event){
    event.preventDefault();
    $('#project-feature').show();
    $('#intro').show();
    $('#intro').find('img').hide();
    $('#content-placeholder').hide();
  });
}

$(document).ready(function(){
  $('.navigation').html(navigationString);
  $('.navigation-social').html(socialMediaString);
});
