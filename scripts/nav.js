'use strict';

/*

   This piece uses jQuery and the Pages variable (defined in index.html) to
   create the navigation links (list items) in the page header, with the
   needed angular directives in them. The directives are to make the right 
   link highlighted at each route.

*/

/* global $ */
/* global Pages */


$(function () {
  // Create a navigation item (a link) for each page.
  for (var path in Pages) {
    var title = Pages[path][1];

    /*
     * HTML to be created:
<li ng-class="{active: (locationPath=='/about')}"><a href="#/about">About</a></li>
  */}


});