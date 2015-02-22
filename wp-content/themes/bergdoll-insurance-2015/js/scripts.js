// Store element & class vars
var
  $body = $('body');



$(document).ready(function() {

  document.cookie = "WT_FPC=id=251b136efacf418d00d1424028079863:lv=1424566119478:ss=1424565737243";

  var
    $stateSelect = $('#state_select'),
    $quoteButton = $('#start_quote');

  $stateSelect.change(function() {
    var transitionDuration = 200;
    var showOpts = $(this).children('option:selected').attr('data-opts');
    var optsClass = '.' + showOpts;
    $(optsClass).siblings('.active').fadeOut(transitionDuration, function() {
      $(this).removeClass('active');
      $('.product_select').val([]);
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