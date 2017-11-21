var url = 'http://localhost:3000/webuycars/public/';
function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}
$('.errtooltip').on('input', function() {
    $(this)
        .removeClass('inputerror')
        .tooltip('destroy');
});
$('.starinp').on('click', function() {
    var thisName = $(this).attr('name');
    if ($("input:radio[name='" + thisName + "']").is(':checked')) {
        $(this)
            .parent()
            .parent()
            .removeClass('inputerror')
            .tooltip('destroy');
    }
});
$('#ga-door').click(function() {
    $('#svg-rol').css('display', 'block');
    var emailvalid = checkInput('email', 1);
    var posvalid = checkInput('pos', 1);
    var telvalid = checkInput('tel', 1);
    if (emailvalid && posvalid && telvalid) {
        $('#all-form').submit();
    } else {
        $('#gotostap2').click();
    }
});
var toggleElem;
$('.check-stap').on('click', function() {
    if ($(this).attr('data-toggle') == 'tab') {
        toggleElem = this;
        setTimeout(function() {
            $(toggleElem).attr('data-toggle', '');
        }, 1);
        if ($(this).attr('type') == 'submit') {
            $('.svg-rol').addClass('svg-show');
            $('#all-form').submit();
        }
        return;
    }
    var parent_tab_pane = $(this).parents('.tab-pane');
    var errors = [];
    parent_tab_pane
        .find(
            'input[type="text"],input[type="email"],input[type="radio"],input[type="number"]'
        )
        .each(function() {
            var type = $(this).attr('type');
            var isnum = isNumber($(this).val());
            // if the type is NOT radio
            if (type != 'radio') {
                // if the value is empty it adds the tooltip, depending on what kind of input it is, it puts it on the parent or not
                var curElem;
                // Sets the element that needs the tooltip
                if ($(this).hasClass('currencyinput')) {
                    curElem = $(this).parent();
                } else {
                    curElem = $(this);
                }
                // if val is empty the above element will get tooltipped
                if ($(this).val() == '') {
                    errors.push($(this).attr('name'));
                    setTooltip(curElem, 'Dit veld is verplicht');
                } else {
                    removeTooltip(elem);
                }
                // If the type is number it also checks if the text in it is a number (pointless if console dev changed type)
                if (type == 'number') {
                    var elem = $(this);
                    if ($(this).hasClass('currencyinput')) {
                        elem = $(this).parent();
                    }
                    if (!isnum) {
                        errors.push($(this).attr('name'));
                        setTooltip(elem, 'Dit veld moet een getal hebben');
                    } else {
                        removeTooltip(elem);
                    }
                }
                // Some special bullshit if the type is radio
            } else {
                var thisName = $(this).attr('name');
                var elem = $(this)
                    .parent()
                    .parent();
                if (!$("input:radio[name='" + thisName + "']").is(':checked')) {
                    errors.push($(this).attr('name'));
                    setTooltip(elem, 'Dit veld is verplicht');
                } else {
                    removeTooltip(elem);
                }
            }
        });
    // If the current screen is step2, it checks the validity of the 3 inputs
    if ($(this).attr('href') == '#step3') {
        var emailvalid = checkInput('email', 1, 1);
        var posvalid = checkInput('pos', 1, 1);
        var telvalid = checkInput('tel', 1, 1);
        if (!emailvalid || !posvalid || !telvalid) {
            errors.push($(this).attr('href'));
        }
    } else if ($(this).attr('type') == 'submit') {
        console.log('step3');
        var elem = document.getElementsByClassName('file-caption-name')[0];
        if (elem.title == '') {
            errors.push('Empty');
            console.log('empty');
            setTooltip($('.file-caption-main'), 'Upload een afbeelding');
        } else {
            removeTooltip($('.file-caption-main'));
        }
    }
    if (!errors.length) {
        $(this).attr('data-toggle', 'tab');
        $(this).click();
    } else {
        // console.log(errors);
    }
});
function setTooltip(elem, str) {
    $(elem)
        .addClass('inputerror')
        .addClass('errtooltip')
        .attr('title', str)
        .attr('data-placement', 'right')
        .tooltip('fixTitle')
        .tooltip('show');
}
function removeTooltip(elem) {
    $(elem)
        .removeClass('inputerror')
        .tooltip('destroy');
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
            .removeClass('checks-nook')
            .addClass('checks-ok');
        if (ermode == 1) {
            removeTooltip($('#' + name + 'TB'));
        }
    } else {
        $('#' + name + '-fa')
            .addClass('checks-nook')
            .removeClass('checks-ok');
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

var check = [];
var lastScrolltop = 0;
$('.file-caption-name').attr('placeholder', 'Voeg afbeeldingen toe...');
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip(); // initializes bootstrap tooltips
    checkInput('email');
    checkInput('pos');
    checkInput('tel');
});
$('#emailTB').on('input', function() {
    checkInput('email');
});
$('#posTB').on('input', function() {
    checkInput('pos');
});
$('#telTB').on('input', function() {
    checkInput('tel');
});
// Controls the navigation
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();
    // on scroll, let the interval function know the user has scrolled
    $('body').scroll(function(event) {
        didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 300);
    function hasScrolled() {
        var nowScrollTop = $('body').scrollTop();
        if (Math.abs(nowScrollTop - lastScrollTop) <= delta) return;
        if (nowScrollTop > lastScrollTop && nowScrollTop > navbarHeight * 3.5) {
            $('.navbar')
                .removeClass('nav-down')
                .addClass('nav-up');
            // $('.navbar').css('top', '-300px')
        } else {
            $('.navbar')
                .removeClass('nav-up')
                .addClass('nav-down');
            // $('.navbar').css('top', '0px')
        }
        lastScrollTop = nowScrollTop;
    }
});
