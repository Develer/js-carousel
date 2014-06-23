/* js-carousel-css3.js */

$(function () {
    
    for (var i = 1; i < 20; i++) {
        $('.main-block').append('\
            <div class="block">\
                <img src="http://api.randomuser.me/portraits/women/'+i+'.jpg"/>\
            </div>\
        ');
    }

    // var $photo = $('img');
    // var photo = $photo[0];
    var pix = 200;
    // photo.style.WebkitTransition = "all 0.8s ease-in-out";
    var transition = "all 0.8s ease-in-out";
    $('.block').css("-webkit-transition", transition);
    $('.block').css("-moz-transition", transition);
    $('.block').css("-ms-transition", transition);
    $('.block').css("-o-transition", transition);
    $('.block').css("transition", transition);
    $('body').keydown(function(event) {
        if (event.keyCode == 39) {
            $('.block').css("-webkit-transform", "translate("+pix+"px, 0px)");
            $('.block').css("-moz-transform", "translate("+pix+"px, 0px)");
            $('.block').css("-ms-transform", "translate("+pix+"px, 0px)");
            $('.block').css("-o-transform", "translate("+pix+"px, 0px)");
            $('.block').css("transform", "translate("+pix+"px, 0px)");

            pix += 200;
        }
        if (event.keyCode == 37) {
            $('.block').css("-webkit-transform", "translate("+pix+"px, 0px)");
            $('.block').css("-moz-transform", "translate("+pix+"px, 0px)");
            $('.block').css("-ms-transform", "translate("+pix+"px, 0px)");
            $('.block').css("-o-transform", "translate("+pix+"px, 0px)");
            $('.block').css("transform", "translate("+pix+"px, 0px)");
            pix -=200;
        }
        if (event.keyCode == 13) {}
    });
});