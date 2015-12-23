

$(document).ready(function() {
  var
    $html = $('html'),
    $body = $('body'),
    $getQuote = $body.find('#get-quote');

  $getQuote.find('.js-pretty-select').each(function() {
    var
      $prettySelect = $(this),
      $realSelect = $prettySelect.find('.js-select'),
      value = $realSelect.val(),
      valueLabel = $realSelect.find('option:selected').text(),
      $selected = $prettySelect.find('.selected-option'),
      $options = $prettySelect.find('.select-options'),
      showOptionsClass = 'show-options',
      validClass = 'valid',
      selectedClass = 'selected';

      console.log(value);

    if (value != null || value != undefined) {
      var $selectedOption = $options.find('li[data-value='+value+']');
      $selected.text(valueLabel);
      $selectedOption.addClass(selectedClass);
      $prettySelect.addClass(validClass);
    }
    else {
      var placeholder = $realSelect.find('option:first').text();
      $selected.text(placeholder);
    }

    $selected.click(function(e) {
      e.preventDefault();
      if (!$prettySelect.hasClass(showOptionsClass)) {
        $prettySelect.addClass(showOptionsClass);
        $options.velocity('slideDown', {duration: 300, easing: "easeOutCubic", queue: false});
        $options.velocity({opacity: 1}, {duration: 300, easing: "easeOutCubic", queue: false});
      }
    });

    $options.find('li').click(function(e) {
      e.preventDefault();
      var
        selectedValue = e.target.dataset.value;
      $realSelect.val(selectedValue);
      $realSelect.trigger('change');
      $options.velocity('fadeOut', {duration: 300, easing: "easeOutCubic", queue: false});
    });

    $realSelect.change(function(event) {
      var
        valueSelected = this.value,
        $selectedOption = $options.find('li[data-value='+valueSelected+']'),
        selectedText = $selectedOption.text();
      $options.find('.'+selectedClass).removeClass(selectedClass);
      $selectedOption.addClass(selectedClass);
      $selected.text(selectedText);
      $prettySelect.addClass(validClass);
      if ($prettySelect.hasClass(showOptionsClass)) {
        $prettySelect.removeClass(showOptionsClass);
      }
    });
  });

});