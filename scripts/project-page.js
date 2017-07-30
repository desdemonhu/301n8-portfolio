'use strict';

$(document).ready(function(){
  projects.forEach(function(item){
    var $project = $('#projects').clone();
    $project.removeClass('template');
    $project.find('#project-image').attr('src', item.image);
    $project.find('#project-name').text(item.name);
    $project.find('#project-url').attr('href', item.url).text(item.url);
    $project.find('#project-description').text(item.description);
    console.log($project.find('#project-image'));
    $('body').append($project);
  });
});
