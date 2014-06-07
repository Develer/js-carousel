/* js-carousel.js */

$(function() {


    $("body").keydown(function(event) {
        var move = null, duration_ms = 800, n = 3;
        if(event.keyCode == 37) { // left
            move = "-=145px";
        } else if(event.keyCode == 39) { // right
            move = "+=145px";
        }

        if (move) {
            $(".block:first").animate({
                left: move
            },
            {
                duration: duration_ms,
                    step: function(now, fx) {
                            $(".block:gt(0)").css("left", now);
                        }
            });
        }
    });

    // Find central element
    var block_count = $('.block').length;
    var central_element_index = Math.round(block_count/2);
    var $central_element = $($('.block').get(central_element_index-1));

    // Move central element to window's center
    var window_width = window.innerWidth;
    var element_width = $central_element.outerWidth(true);
    console.log(element_width);

    // var central_element_pos = $central_element.position();
    var central_position = window_width/2
    var element_begin_pos = $central_element.offset().left;
    var move_amount = (central_position - element_width/2) - element_begin_pos;
    $central_element.offset({ left: central_position-element_width/2});
    $('.block').css('left', move_amount);
    $central_element.css('background-color', 'red');

});