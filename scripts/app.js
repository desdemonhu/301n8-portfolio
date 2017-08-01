'use strict';
///array of all projects
var projects = [];
///object where functions to show projects on "project"
var projectView = {};

///constructor function for project information
function Project(name, url, image, description, language, published){
  this.name = name;
  this.url = url;
  this.image = image;
  this.description = description;
  this.language = language;
  this.published = published;
  this.daysAgo = this.calculateDaysAgo();

  ///automatically push new one to the array
  projects.push(this);
}

Project.prototype.toHtml = function(){
  ///displays name, url, image, and description
  $('#project-image').attr('src', this.image);
  $('#project-name').text(this.name);
  $('#project-url').attr('href', this.url).text(this.url);
  $('#project-description').html(this.description);
};

Project.prototype.calculateDaysAgo = function(){
  var oneDay = 24*60*60*1000;
  var published = new Date(this.published);
  var todaysDate = new Date();
  var daysAgo = Math.round(Math.abs((published.getTime()-todaysDate.getTime())/oneDay));

  if(todaysDate < published){
    return 0;
  }else {
    return daysAgo;
  }
}

///display projects on project page
Project.prototype.displayProjectsPage = function(){
  var $project = $('#projects').clone();
  //published number of days ago calculations
  $project.addClass('projects-displayed');
  $project.find('#project-image').attr('src', this.image);
  $project.find('#project-name').text(this.name);
  $project.find('#project-url').attr('href', this.url).text(this.url);
  $project.find('#project-description').html(this.description);
  $project.attr('data-language', this.language);
  if(this.calculateDaysAgo() === 0){
    ///if Published date is in the future just display in progress
    $project.find('#published').parent().text('In Progress');
  }else {
    $project.find('#published').text(this.calculateDaysAgo());
  }
  $('body').append($project);
}

projectView.showMoreOrLess = function(){
  $('.projects-displayed').find('p:nth-of-type(n+2)').hide();

  $('.projects-displayed').on('click','.expand', function(event){
    event.preventDefault();
    var expandText = $(this).text();
    if(expandText === 'Expand'){
      $(this).parent().children('.description').children().fadeIn('fast');
      $(this).text('Show less');
    }else {
      $('.projects-displayed').find('p:nth-of-type(n+2)').hide();
      $(this).text('Expand');
    }
  })
}

projectView.populateFilter = function(){
  $('.projects-displayed').each(function(){
    if($(this).hasClass('projects-displayed')){
      ///TODO: code goes here populate filter
      var language = $(this).attr('data-language');
      var optionTag = '<option value="' + language + '">' + language + '</option>';
      if($('#filter-language option[value="' + language + '"]').length === 0){
        $('#filter-language').append(optionTag);
      }
    }
  });
}

projectView.filterChange = function(){
  $('#filter-language').on('change', function(){
    ///look at category that was selected to get name value. filter data-language by that name
    var languageName = $(this).val();

    if(languageName){
      $('.projects-displayed').hide();
      ///TODO: Nothing shows even though the data type matches.FIX
      $('.projects-displayed').filter('data-language[value="' + languageName + '"]').fadeIn('fast');
    }else {
      $('.projects-displayed').fadeIn('fast');
    }
  });
}

///click event for project Next button
function featureDisplay(){
  var index = projects.length - 1;
  projects[index].toHtml();

  $('#next-button').click(function(){
    index +=1;
    if(index < projects.length){
      projects[index].toHtml();
    }else {
      index = 0;
      projects[index].toHtml();
    }
  });
}

///Sorts the projects array by most recent Published date
projectView.sortProjects = function(){
  projects.sort(function(a,b){
    var aDate = new Date(a.published);
    var bDate = new Date(b.published);
    return bDate - aDate;
  })
}

///handlebars template for projects
$(function(){
  projectView.sortProjects();
  var templateScript = $('#handlebar-template').html();
  var template = Handlebars.compile(templateScript);
  var compiledHtml = template(projects);
  console.log(projects);
  $('#content-placeholder').html(compiledHtml);
});


$(document).ready(function(){

  navigationFunctions.hamburgerMenu();
  featureDisplay();
  navigationFunctions.portfolioClick();
  navigationFunctions.homeClick();
  navigationFunctions.aboutClick();

  for(var i = 0; i < projects.length; i++){
    projects[i].displayProjectsPage();
  }
  projectView.showMoreOrLess();
  projectView.populateFilter();
  projectView.filterChange();
});
