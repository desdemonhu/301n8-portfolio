'use strict';
var portfolio = portfolio || {};

(function(app){
  var navigationFunctions = {};

  var navigationString = '<ul><li data-content="intro"><a href="/">Home</a></li><li>-</li><li data-content="about"><a href="/about">About</a></li><li>-</li><li data-content="content-placeholder"><a href="/projects">Projects</a></li><li>-</li><li data-content="gallery"><a href="/gallery">Gallery</a></li></ul>';

  var socialMediaString = '<ul><li><a href="https://github.com/desdemonhu" target="_blank">GitHub<a></li><li>-</li><li><a href="https://www.linkedin.com/in/raegan-millhollin-2a3647b" target="_blank">Linkedin</a></li><li>-</li><li><a href="http://desdemonhu.deviantart.com/" target="_blank">DeviantArt</a></li><li>-</li><li><a href="http://www.bookofraziel.com/from-the-book-of-raziel/strangefruit/" target="_blank">Strange Fruit</a></li></ul>';

  ///hamburger menu closes if you click it a second time
  navigationFunctions.hamburgerMenu = function(){
    var click = 0;  ///number of times hamburger menu has been clicked

    $('.icon-menu').click(function(){
      click += 1;
      if(click % 2 === 0){
        $('.navigation ul').css('display', 'none');
      }else {
        $('.navigation ul').css('display', 'inline');
        $('.navigation li').css('display', 'inline');
      }
    });
  }

  // navigationFunctions.mainNav = function(){
  //   $('.navigation').on('click', 'li', function(e){
  //     e.preventDefault();
  //     $('.tab-content').children().hide();
  //     $('.tab-content').children(`#${$(this).data('content')}`).fadeIn();
  //   });
  // }

  navigationFunctions.mainNav = function(section){
    $('.tab-content').children().hide();
    $(`#${section}`).fadeIn();
  }

  $(document).ready(function(){
    navigationFunctions.hamburgerMenu();
    $('.navigation').html(navigationString);
    $('.navigation-social').html(socialMediaString);
    // navigationFunctions.mainNav();
  });
  app.navigationFunctions = navigationFunctions;

})(portfolio);
