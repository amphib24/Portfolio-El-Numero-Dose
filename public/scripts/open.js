$(document).ready(function(){
  $('#clicker').click(function(event){
    event.preventDefault();
    $('body').fadeOut(2500, redirect);
  });
  $(redirect).fadeIn(2500);
  function redirect() {
    $(location).attr('href', 'main.html');
  }

});
