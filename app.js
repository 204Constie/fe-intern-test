/*

    {
        "width":5616,
        "height":3744,
        "author":"Alejandro Escamilla",
        "url":"https://unsplash.com/photos/N7XodRrbzS0/download"
    }

    To use lightweight placeholder images instead of real photos, set truthy value for 'placeholders' parameter, e.g.
    https://codewise-fe-api.herokuapp.com/photos?placeholders=1, or
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5&placeholders=1

*/


(function(window, document, $){
'use strict';
//variables
var offsetCounter = 0;
var limit = 15;
var wrapper = $('#wrapper');


function photosService(){
  var url = 'https://codewise-fe-api.herokuapp.com/photos?offset=' + (offsetCounter*limit) + '&limit=' + limit;
  $.get( url , function( data ) {
    offsetCounter++;
    console.log('photosService result: ', data);
    photosDisplayer();
  });
};

function photosDisplayer(){
  console.log('photosDisplayer');

  wrapper.append('a');
};

function infiniteScrollService(){
  $(window).scroll(function () {
    // if ($(document).height() - win.height() == win.scrollTop())
   if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
      //load new photos from server
   }
 });
};

function init(){
  photosService();
  setTimeout(function(){
     photosService();
   }, 1000);
};

init();

















})(window, document, jQuery);
