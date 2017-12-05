var url = 'http://localhost:3000/webuycars/public/';
function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}
$('.errtooltip').on('input', function() {
    // console.log('yaaas');
    $(this)
        .removeClass('inputerror')
        .tooltip('destroy');
});
$('.c-stars__input').on('click', function() {
    var thisName = $(this).attr('name');
    console.log('yaas');
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
            $('.c-load-icon').addClass('c-load-icon--show');
            $('.c-load-icon').removeClass('--disnone');
            $('#all-form').submit();
        }
        return;
    }
    var parent_tab_pane = $(this).parents('.tab-pane');
    var errors = [];
    parent_tab_pane
        .find('input[type="text"],input[type="email"],input[type="radio"],input[type="number"]')
        .each(function() {
            var type = $(this).attr('type');
            var isnum = isNumber($(this).val());
            // if the type is NOT radio
            if (type != 'radio') {
                // if the value is empty it adds the tooltip, depending on what kind of input it is, it puts it on the parent or not
                var curElem;
                // Sets the element that needs the tooltip
                if ($(this).hasClass('js-parent')) {
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
                    if ($(this).hasClass('js-parent')) {
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
        var elem = document.getElementsByClassName('file-caption-name')[0];
        if (elem.title == '') {
            errors.push('Empty');
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

$('.js-close-flash').on('click', function() {
    $('.c-flash-message').addClass('c-flash-message--close');
});
$('.hamburger').on('click', function() {
    if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
    } else {
        $(this).addClass('is-active');
    }
});
$('.js-mobile-nav').on('click', function() {
    expandMobileNav();
});
