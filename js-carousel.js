/* js-carousel.js */

$(function() {
    // Find central element
    var block_count = $('.block').length;
    var central_element_index = Math.round(block_count/2);
    var $central_element = $($('.block').get(central_element_index-1));

    // count width of elements
    var window_width = window.innerWidth;
    var element_width = $central_element.outerWidth(true);

    // Move central element to window's center (only initial)
    var central_position = window_width/2
    var element_begin_pos = $central_element.offset().left;
    var move_amount = (central_position - element_width/2) - element_begin_pos;
    $central_element.offset({ left: central_position-element_width/2});
    $('.block').css('left', move_amount);
    $central_element.css('background-color', 'red');

    // keyboard events
    $("body").keydown(function(event) {
        var move = null, duration_ms = 800, n = 3;
        if(event.keyCode == 37) { // left
            $central_element.css('background-color', '#abc');
            $central_element = $central_element.next('.block');
            element_width = $central_element.outerWidth(true);

            central_position = window.innerWidth/2;
            element_begin_pos = $central_element.offset().left;
            move_amount = (central_position - element_width/2) - element_begin_pos;
            move = "+="+move_amount+"px";
        } else if (event.keyCode == 39) { // right
            $central_element.css('background-color', '#abc');
            $central_element = $central_element.prev('.block');
            element_width = $central_element.outerWidth(true);

            central_position = window.innerWidth/2;
            element_begin_pos = $central_element.offset().left;
            move_amount = (central_position - element_width/2) - element_begin_pos;
            move = "+="+move_amount+"px";
        }

        if (move) {
            $(".block:first").animate({
                left: move
            }, {
                duration: duration_ms,
                    step: function(now, fx) {
                            $(".block:gt(0)").css("left", now);
                        },
                complete: function() {
                    $central_element.css('background-color', 'red');
                }
            });
        }
    });
});