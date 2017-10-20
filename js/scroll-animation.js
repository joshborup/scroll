var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    var trigger_position = (element_top_position  <= window_bottom_position - 150);
    var trigger_position_return = (element_top_position  >= window_bottom_position);

    //check to see if this current container is within viewport
    if (trigger_position && ($element.hasClass('animation-element') == true)) {
      $element.addClass('in-view');
    }
  });
}

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

$(window).on('scroll', throttle(check_if_in_view, 200));
