'use strict';

var navigationString = '<ul><li><a href="https://github.com/desdemonhu">GitHub<a></li><li><a href="#">Project Portfolio</a></li><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="https://www.linkedin.com/in/raegan-millhollin-2a3647b">Linkedin</a></li><li><a href="http://desdemonhu.deviantart.com/">DeviantArt</a></li></ul>'

function portfolioClick(){
  $('li:contains("Project")').on('click', function(event){
    event.preventDefault();
    $('#project-feature').hide();
    $('#intro').hide();
    $('#footer').prev().hide();
    $('#footer').hide();
    ///Shows project list
    $('.projects-displayed').each(function(){
      $(this).removeClass('template');
    });
  })
}

function homeClick(){
  $('li:contains("Home")').on('click', function(event){
    event.preventDefault();
    $('#intro').show();
    $('#intro').find('img').show();
    $('#project-feature').show();
    $('#footer').prev().show();
    $('#footer').show();
    $('.projects-displayed').each(function(){
      $(this).addClass('template');
    });
  });
}

function aboutClick(){
  $('li:contains("About")').on('click', function(event){
    event.preventDefault();
    $('#project-feature').show();
    $('#intro').show();
    $('#intro').find('img').hide();
    $('.projects-displayed').each(function(){
      $(this).addClass('template');
    });
  });
}

$(document).ready(function(){
  $('.navigation').html(navigationString);
});
