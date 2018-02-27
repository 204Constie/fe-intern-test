
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

//download photos
function photosService(){
  var url = 'https://codewise-fe-api.herokuapp.com/photos?offset=' + (offsetCounter*limit) + '&limit=' + limit + '&placeholders=1';
  // var url = 'https://codewise-fe-api.herokuapp.com/photos?offset=' + (offsetCounter*limit) + '&limit=' + limit ;
  $.get( url , function( data ) {
    offsetCounter++;
    console.log('photosService result: ', data);
    photosDisplayer(data);
  });
};

//display in HTML
function photosDisplayer(photos){
  console.log('photosDisplayer: ', photos);

  for(var i=0; i<photos.length; i += 4){
    col1.append(
      '<div clss="img_wrapper">' + '\n' +
        '<img class="masonry_img" src="' + photos[i].url + '" alt="' + photos[i].author + '">' + '\n' +
      '</div>' + '\n'
    );
    col2.append(
      '<div clss="img_wrapper">' + '\n' +
        '<img class="masonry_img" src="' + photos[i+1].url + '" alt="' + photos[i+1].author + '">' + '\n' +
      '</div>' + '\n'
    );
    col3.append(
      '<div clss="img_wrapper">' + '\n' +
        '<img class="masonry_img" src="' + photos[i+2].url + '" alt="' + photos[i+2].author + '">' + '\n' +
      '</div>' + '\n'
    );
    col4.append(
      '<div clss="img_wrapper">' + '\n' +
        '<img class="masonry_img" src="' + photos[i+3].url + '" alt="' + photos[i+3].author + '">' + '\n' +
      '</div>' + '\n'
    );
  }
};

//infinite scroll with jQuery
function infiniteScrollService(){
  windowElement.scroll(function () {
   if (windowElement.scrollTop() >= documentElement.height() - windowElement.height()) {
      //load new photos from server
      photosService();
   }
 });
};

//initialize
function init(){
  photosService();
  infiniteScrollService();
};
init();


})(window, document, jQuery);
