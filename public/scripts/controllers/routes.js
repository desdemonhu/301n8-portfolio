'use strict';
var portfolio = portfolio || {};
var page = page;

page('/', portfolio.indexcontroller.init);
page('/gallery', portfolio.gallerycontroller.init);
page('/projects', portfolio.indexcontroller.initProjects, portfolio.projectView.initProjectsDisplay)
page('/about', portfolio.indexcontroller.initAbout);
page();
