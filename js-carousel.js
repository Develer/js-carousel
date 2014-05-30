/* js-carousel.js */

$(function() {

    // $().animate();

    $("body").keydown(function(event) {
        var move = null, duration_ms = 800, n = 3;
        if(event.keyCode == 37) { // left
            move = "-=145px";
        } else if(event.keyCode == 39) { // right
            move = "+=145px";
        }

        if (event.keyCode == 38) { // up
            console.log('up');
            $('.active').animate({
                width: "+=100px"
            }, duration_ms);
        }

        if (move) {
            $(".block:first").animate({
                left: move
            },
            {
                duration: duration_ms,
                    step: function(now, fx) {
                            $(".block:gt(3)").css("left", now);
                        }
            });
        }
    });
});