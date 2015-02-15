// Store element & class vars
var
  $body = $('body');



$(document).ready(function() {

  var
    $stateSelect = $('#state_select'),
    $quoteButton = $('#start_quote');

  $stateSelect.change(function() {
    var transitionDuration = 200;
    var showOpts = $(this).children('option:selected').attr('data-opts');
    var optsClass = '.' + showOpts;
    $(optsClass).siblings('.active').fadeOut(transitionDuration, function() {
      $(this).removeClass('active');
      $(optsClass).fadeIn(transitionDuration/2).addClass('active');
    });
    $quoteButton.addClass('inactive').removeAttr('href');
  });


  $('.product_select').change(function() {
    if ($(this).parent('.state-opts').hasClass('active')) {
      $widthSetter = $(this).next('.js_width_tmp');
      $widthSetter.html($(this).children('option:selected').text());

      var desiredWidth = $widthSetter.width();
      $(this).width(desiredWidth);
      var dataHref = $(this).children('option:selected').attr('data-href');
      $quoteButton.attr('href', dataHref).removeClass('inactive');
    }
  });

  $('.button').click(function(e){
    if ($(this).hasClass('inactive')) {
      e.preventDefault();
    }
  });

});