// Store element & class vars
var
  $body = $('body');



$(document).ready(function() {

  var
    $stateSelect = $('#state_select'),
    $quoteButton = $('#start_quote');

  $stateSelect.change(function() {
    var transitionDuration = 400;
    var showOpts = $(this).children('option:selected').attr('data-opts');
    var optsClass = '.' + showOpts;
    $(optsClass).siblings('.active').removeClass('active');
    setTimeout(function() {
      $(optsClass).addClass('active');
    }, transitionDuration);
  });


  $('.product_select').change(function() {
    if ($(this).parent('.state-opts').hasClass('active')) {
      var dataHref = $(this).children('option:selected').attr('data-href');
      $quoteButton.attr('href', dataHref).removeClass('inactive');
    }
  });

});