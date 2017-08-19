'use strict';
///array of all projects
var projects = [];
///object where functions to show projects on "project"
var projectView = {};
///object for initializing page
var indexView = {};

var banners = ['assets/the_writer_cropped.png', 'assets/azriel.gif'];

///constructor function for project information
function Project(name, url, image, description, language, published){
  ///TODO: redo this so that I don't have to put them individually in loadProjects
  this.name = name;
  this.url = url;
  this.image = image;
  this.description = description;
  this.language = language;
  this.published = published;
  this.daysAgo = this.calculateDaysAgo();

  if(this.daysAgo === 0){
    this.daysAgo = 'In Progress';
  } else {
    this.daysAgo = this.daysAgo + ' days ago';
  }
}

///Display for feature project
Project.prototype.toHtml = function(){
  ///displays name, url, image, and description for feature item
  $('#feature-image').attr('src', this.image);
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

projectView.showMoreOrLess = function(){
  $('.projects-displayed').find('p:nth-of-type(n+2)').hide();

  $('#content-placeholder').on('click','.expand', function(event){
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
    console.log(languageName);

    if(languageName){
      $('.projects-displayed').hide();
      ///TODO: Doesn't work for ANDA for some reason even though it will work for other projects if I change their language to GameMaker Studio
      $('.projects-displayed').filter('div[data-language="' + languageName + '"]').fadeIn('fast');
    }else {
      $('.projects-displayed').fadeIn('fast');
    }
  });
}

///click event for project Next button
indexView.featureDisplay = function(){
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
projectView.projectsDisplay = function(){
  projectView.sortProjects();
  var templateScript = $('#handlebar-template').html();
  var template = Handlebars.compile(templateScript);
  var compiledHtml = template(projects);
  console.log(projects);
  $('#content-placeholder').append(compiledHtml);
};

///Pull projects from JSON file or localStorage
Project.loadProjects = function(rawData){
  rawData.forEach(function(project){
    projects.push(new Project(
      project.name, project.url, project.image, project.description, project.language, project.published
    ));
  })
}

Project.fetchData = function(){
  if(localStorage.jsonFile){
    ///Get stringyfid date from localStorage
    ///Project.loadProjects(parsed data)
    Project.loadProjects(JSON.parse(localStorage.jsonFile));
    ///call projectView.projectsDisplay
    projectView.initProjectsDisplay();
  }else{
    ///Create localStorage.jsonFile
    ///Load projects from JSON file
    ///Call projectView.projectsDisplay
    $.getJSON('data/projects.json', function(data){
      localStorage.jsonFile = JSON.stringify(data);
      Project.loadProjects(data);
      projectView.initProjectsDisplay();
    });
  }
}

///prints out projects and then shows feature display
projectView.initProjectsDisplay = function() {
  projectView.projectsDisplay();
  indexView.featureDisplay();
}

///picks banner at random and loads theme based on that
indexView.insertCSSTheme = function(){
  ///pick banner
  let index = Math.floor(Math.random() * banners.length);
  $('#intro-image img').attr('src', banners[index]);

  //Create link for stylesheet
  var $cssLinkEl = $('<link>').attr('rel','stylesheet');

  switch (index) {
  case 0:
    // $cssLinkEl.attr();
    break;
  case 1:
    $cssLinkEl.attr('href','styles/theme_pom.css');
    break;
  default:
    // $cssLinkEl.attr();
  }
  $('head').append($cssLinkEl);
}

indexView.copyright = function(){
  var date = new Date();
  $('#current-year').text(date.getFullYear());
}

indexView.initIndexPage = function(){
  indexView.insertCSSTheme();
  indexView.copyright();
  Project.fetchData();
  projectView.showMoreOrLess();
  projectView.populateFilter();
  projectView.filterChange();
}

$(document).ready(function(){
  indexView.initIndexPage();
});
