/*Site JavaScript*/

/*Events to fire after the document/DOM has loaded:*/
$(document).ready(function() {
  $('div.preview').load('news.htm .summary:first', function() {
    $('div.preview').append('<p><a href="news.htm">Read on...</a></p>');
  });
  //$('div.preview').append('<p><a href="news.htm">Read on...</a></p>');

});

/*Events to fire on a resize of the window:*/
/*$(window).resize(function() {

});*/
