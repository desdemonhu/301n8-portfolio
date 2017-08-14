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

  if(this.daysAgo === 0){
    this.daysAgo = 'In Progress';
  } else {
    this.daysAgo = this.daysAgo + ' days ago';
  }

  ///automatically push new one to the array
  projects.push(this);
}

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
  featureDisplay();

  projectView.showMoreOrLess();
  projectView.populateFilter();
  projectView.filterChange();
});
