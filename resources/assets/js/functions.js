var transitionval = $('.l-mobile-nav').css('transition-duration');
transitionval = transitionval.replace('s', '');
transitionval = transitionval * 1000;
$(document).ready(function() {

    var elem = document.getElementById('app');
    var hammertime = Hammer(elem).on("swiperight", function(event) {
        var endX = event.center.x;
        var movedX = event.deltaX
        var startX = endX - movedX;
        console.log(endX);
        console.log(movedX);
        console.log("start: ", startX);
        if (startX < 50 && endX > 70){
            expandMobileNav(1);
            console.log("yes");
        }
    });
    var hammertime = Hammer(elem).on("swipeleft", function(event) {
        var endX = event.center.x;
        var movedX = event.deltaX
        var startX = endX - movedX;
        console.log(endX);
        console.log(movedX);
        console.log("start: ", startX);
        if (movedX < -40){
            expandMobileNav(2);
            console.log("yes");
        }
    });
});
function addnoDisplay() {
    $('.l-mobile-nav__list').addClass('l-mobile-nav__list--nodisplay');
    $('.l-mobile-nav').removeClass('l-mobile-nav--full-height');
}
function expandMobileNavTime() {
    $('.l-mobile-nav').addClass('l-mobile-nav--full-height');
    $('.l-mobile-nav').addClass('l-mobile-nav--expanded');
    $('.l-mobile-nav__list').removeClass('l-mobile-nav__list--hidden');
    $('.l-mobile-nav__button').addClass('l-mobile-nav__button--expanded');
}
function expandMobileNav(mode = 0) {
    if (mode == 0){
        if (!$('.l-mobile-nav').hasClass('l-mobile-nav--expanded')) {
            $('.l-mobile-nav__list').removeClass('l-mobile-nav__list--nodisplay');
            setTimeout(expandMobileNavTime, 1);
        } else {
            $('.l-mobile-nav').removeClass('l-mobile-nav--expanded');
            $('.l-mobile-nav__list').addClass('l-mobile-nav__list--hidden');
            $('.l-mobile-nav__button').removeClass(
                'l-mobile-nav__button--expanded'
            );
            setTimeout(addnoDisplay, transitionval);
        }
    }
    if (mode == 1){
        if (!$('.l-mobile-nav').hasClass('l-mobile-nav--expanded')) {
            $('.l-mobile-nav__list').removeClass('l-mobile-nav__list--nodisplay');
            setTimeout(expandMobileNavTime, 1);
        }
    }
    if (mode == 2){
        if ($('.l-mobile-nav').hasClass('l-mobile-nav--expanded')) {
            $('.l-mobile-nav').removeClass('l-mobile-nav--expanded');
            $('.l-mobile-nav__list').addClass('l-mobile-nav__list--hidden');
            $('.l-mobile-nav__button').removeClass(
                'l-mobile-nav__button--expanded'
            );
            setTimeout(addnoDisplay, transitionval);
        }
    }
}
function checkInput(name, mode = 0, ermode = 0) {
    var test = {
        email: [
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        ],
        pos: [/^[1-9]{1}[0-9]{3} ?[A-Z]{2}$/i],
        tel: [
            /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031|31)[1-9][0-9][-]?[1-9][0-9]{6}))$/,
            /^(((\\+31|0|0031|031|31)6){1}[1-9]{1}[0-9]{7})$/i,
            /^(([+]31|0031)\s\(0\)([0-9]{9})|([+]31|0031)\s0([0-9]{9})|0([0-9]{9}))$/,
            /^((((0031)|(\+31))(\-)?6(\-)?[0-9]{8})|(06(\-)?[0-9]{8})|(((0031)|(\+31))(\-)?[1-9]{1}(([0-9](\-)?[0-9]{7})|([0-9]{2}(\-)?[0-9]{6})))|([0]{1}[1-9]{1}(([0-9](\-)?[0-9]{7})|([0-9]{2}(\-)?[0-9]{6}))))$/i
        ]
    };
    var err = '';
    switch (name) {
        case 'email':
            err = 'Dit veld moet een geldig E-Mail adres zijn';
            break;
        case 'tel':
            err = 'Dit veld moet een geldig telefoonnummer zijn';
            break;
        case 'pos':
            err = 'Dit veld moet een geldig postcode zijn';
            break;
    }
    var inptext = $('#' + name + 'TB').val();
    var val = 0;
    for (var i = 0; i < test[name].length; i++) {
        if (test[name][i].test(inptext)) {
            val = 1;
            break;
        }
    }
    if (val) {
        $('#' + name + '-fa')
            .removeClass('c-input__check--nook')
            .addClass('c-input__check--ok');
        if (ermode == 1) {
            removeTooltip($('#' + name + 'TB'));
        }
    } else {
        $('#' + name + '-fa')
            .addClass('c-input__check--nook')
            .removeClass('c-input__check--ok');
        if (ermode == 1) {
            setTooltip($('#' + name + 'TB'), err);
        }
    }
    if (mode == 1) {
        return val;
    }
}

function combi(Licenseplate) {
    var first2chars = Licenseplate.substring(0, 2);
    first2chars = first2chars.length === 2 && first2chars.match(/[a-z]/i);
    var lastchar = Licenseplate.substring(
        Licenseplate.length,
        Licenseplate.length - 1
    );
    lastchar = lastchar.length === 1 && lastchar.match(/[a-z]/i);
    if (first2chars && lastchar) {
        var newstr =
            Licenseplate.slice(0, 2) +
            '-' +
            Licenseplate.slice(2, Licenseplate.length - 1) +
            '-' +
            Licenseplate.slice(Licenseplate.length - 1, Licenseplate.length);
    } else {
        var first2chars = Licenseplate.substring(0, 2);
        first2chars = first2chars.length === 2 && first2chars.match(/[0-9]/i);
        var lastchar = Licenseplate.substring(
            Licenseplate.length,
            Licenseplate.length - 1
        );
        lastchar = lastchar.length === 1 && lastchar.match(/[0-9]/i);
        if (first2chars && lastchar) {
            var newstr =
                Licenseplate.slice(0, 2) +
                '-' +
                Licenseplate.slice(2, Licenseplate.length - 1) +
                '-' +
                Licenseplate.slice(
                    Licenseplate.length - 1,
                    Licenseplate.length
                );
        } else {
            var newstr =
                Licenseplate.slice(0, 2) +
                '-' +
                Licenseplate.slice(2, 4) +
                '-' +
                Licenseplate.slice(4);
        }
    }
}
