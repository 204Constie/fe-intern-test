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
var limit = 16;
var wrapper = $('#wrapper');
var windowElement = $(window);
var documentElement = $(document);
var col1 = $('#col1');
var col2 = $('#col2');
var col3 = $('#col3');
var col4 = $('#col4');


function photosService(){
  var url = 'https://codewise-fe-api.herokuapp.com/photos?offset=' + (offsetCounter*limit) + '&limit=' + limit + '&placeholders=1';
  $.get( url , function( data ) {
    offsetCounter++;
    console.log('photosService result: ', data);
    photosDisplayer(data);
  });
};

function photosDisplayer(photos){
  console.log('photosDisplayer: ', photos);

  for(var i=0; i<photos.length; i += 4){
    col1.append(
      '<img class="masonry_img" src="' + photos[i].url + '" alt="Smiley face">' + '\n'
    );
    col2.append(
      '<img class="masonry_img" src="' + photos[i+1].url + '" alt="Smiley face">' + '\n'
    );
    col3.append(
      '<img class="masonry_img" src="' + photos[i+2].url + '" alt="Smiley face">' + '\n'
    );
    col4.append(
      '<img class="masonry_img" src="' + photos[i+3].url + '" alt="Smiley face">' + '\n'
    );
  }
};

function infiniteScrollService(){
  windowElement.scroll(function () {
    // if ($(document).height() - win.height() == win.scrollTop())
   if (windowElement.scrollTop() >= documentElement.height() - windowElement.height()) {
      //load new photos from server
      console.log('infinite scroll');
      photosService();
   }
 });
};

function init(){
  photosService();
  infiniteScrollService();
  // setTimeout(function(){
  //    photosService();
  //  }, 1000);
};

init();

















})(window, document, jQuery);
