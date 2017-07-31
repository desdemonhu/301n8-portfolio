'use strict';

function sortProjects(){
  projects.sort(function(a,b){
    var aDate = new Date(a.published);
    var bDate = new Date(b.published);
    return bDate - aDate;
  })
}

$(document).ready(function(){
  sortProjects();

  projects.forEach(function(item){
    var $project = $('#projects').clone();
    //published number of days ago calculations


    $project.removeClass('template');
    $project.find('#project-image').attr('src', item.image);
    $project.find('#project-name').text(item.name);
    $project.find('#project-url').attr('href', item.url).text(item.url);
    $project.find('#project-description').text(item.description);
    $project.attr('data-language', item.language);
    $project.find('#published').text(item.calculateDaysAgo());
    $('body').append($project);
  });
});
