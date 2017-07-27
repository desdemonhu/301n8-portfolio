'use strict';

///array of all projects
var projects = [];
///constructor function for project information
function Project(name, url, image, description){
  this.name = name;
  this.url = url;
  this.image = image;
  this.description = description;

  ///automatically push new one to the array
  projects.push(this);
};
