'use strict';

///Sorts the projects array by most recent Published date
function sortProjects(){
  projects.sort(function(a,b){
    var aDate = new Date(a.published);
    var bDate = new Date(b.published);
    return bDate - aDate;
  })
}

///display projects on project page
Project.prototype.displayProjectsPage = function(){
  var $project = $('#projects').clone();
  //published number of days ago calculations


  $project.removeClass('template');
  $project.find('#project-image').attr('src', this.image);
  $project.find('#project-name').text(this.name);
  $project.find('#project-url').attr('href', this.url).text(this.url);
  $project.find('#project-description').text(this.description);
  $project.attr('data-language', this.language);
  if(this.calculateDaysAgo() === 0){
    ///if Published date is in the future just display in progress
    $project.find('#published').parent().text('In Progress');
  }else {
    $project.find('#published').text(this.calculateDaysAgo());
  }
  $('body').append($project);
}

$(document).ready(function(){
  sortProjects();
  projects.forEach(function(item){
    item.displayProjectsPage();
  });
});
