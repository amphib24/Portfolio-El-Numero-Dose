$(document).ready(function(){
  $('section#Bio').hide();

  $('nav a').on('click', function(){
		// Current class assigniment
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');

		// Set heading text
    $('h1#heading').text($(this).text());



		// Get & filter link text

    var category = $(this).text().toLowerCase().replace(' ','-');

		// Remove hidden class if 'all-projects' is selected
    if(category === 'home'){
      $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');

    }else {
      $('ul#gallery li').each(function(){
        if(!$(this).hasClass(category)){
          $(this).hide().addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });

    }

		// Stop link behaviour
    return false;
  });
  $('ul#gallery li').on('mouseenter', function(){
    var title = $(this).data('title');
    var desc = $(this).data('desc');

    if(title === null){
      title = '';
    }
    if(desc === null){
      desc = 'click to enlarge';
		}

    $(this).append('<div class="overlay"></div>');

    var overlay = $(this).children('.overlay');

    overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

    overlay.fadeIn(400);
  });

  $('ul#gallery li').on('mouseleave', function(){

    $(this).append('<div class="overlay"><div>');

    var overlay = $(this).children('.overlay');

    overlay.fadeOut(200);
  });
});
