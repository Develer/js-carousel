/* js-carousel.js */

$(function() {
    $("#go1").click(function() {
        $( ".block:first" ).animate({
            left: "-=145px"
        },
        {
            duration:
                500,
                step: function(now, fx) {
                        $( ".block:gt(0)" ).css( "left", now );
                    }
        });
    });
    $("#go2").click(function() {
        $( ".block:first" ).animate({
            left: "+=145px"
        },
        {
            duration:
                500,
                step: function(now, fx) {
                        $( ".block:gt(0)" ).css( "left", now );
                    }
        });
    });
});