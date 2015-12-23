

$(document).ready(function() {
  var
    $html = $('html'),
    $body = $('body'),
    $getQuote = $body.find('#get-quote');

  $getQuote.find('.js-pretty-select').each(function() {
    var
      $this = $(this),
      $realSelect = $this.find('.js-select'),
      value = $realSelect.val(),
      valueLabel = $realSelect.find('option:selected').text(),
      $selected = $this.find('.selected-option'),
      $options = $this.find('.select-options'),
      showOptionsClass = 'show-options',
      validClass = 'valid',
      selectedClass = 'selected';

      console.log(value);

    if (value != null || value != undefined) {
      var $selectedOption = $options.find('li[data-value='+value+']');
      $selected.text(valueLabel);
      $selectedOption.addClass(selectedClass);
      $this.addClass(validClass);
    }
    else {
      var placeholder = $realSelect.find('option:first').text();
      $selected.text(placeholder);
    }

    $this.click(function(e) {
      e.preventDefault();
      if (!$this.hasClass(showOptionsClass)) {
        $this.addClass(showOptionsClass);
        $options.velocity('slideDown', {duration: 300, easing: "easeOutCubic", queue: false});
        $options.velocity({opacity: 1}, {duration: 300, easing: "easeOutCubic", queue: false});
      }
    });

    $options.find('li').click(function(e) {
      e.preventDefault();
      var
        selectedValue = e.target.dataset.value;
      console.log(selectedValue);
      $realSelect.val(selectedValue);
      $options.velocity('fadeOut', {duration: 150, easing: "easeOutCubic"});
    });

    $realSelect.change(function(event) {
      console.log(event);
    });
  });

});