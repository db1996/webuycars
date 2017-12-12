function randomString2(len, beforestr = '', arraytocheck = null) {
    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    if (arraytocheck == null) {
        return beforestr + randomString;
    } else {
        var isIn = $.inArray(beforestr + randomString, arraytocheck);
        if (isIn > -1) {
            var count = 0;
            do {
                randomString = '';
                for (var i = 0; i < len; i++) {
                    var randomPoz = Math.floor(Math.random() * charSet.length);
                    randomString += charSet.substring(randomPoz, randomPoz + 1);
                }
                isIn = $.inArray(beforestr + randomString, arraytocheck);
                count++;
            } while (isIn > -1);
            console.log('it took ' + count + ' tries');
            return beforestr + randomString;
        } else {
            return beforestr + randomString;
        }
    }
}
$('.js-add-user-admin').on('click', function() {
    var rand = randomString2(10, 'r-', newUsers);
    var htmlStr = '';
    htmlStr += '<div class="user-info user-info--is-edit">';
    htmlStr += '<div class="user-info__naam">';
    htmlStr += '<span class="--user-edit">';
    htmlStr += '<input type="text" id="' + rand + '_naam-tb" value="John Doe">';
    htmlStr += '</span>';
    htmlStr += '<span class="--user-view">John Doe</span>';
    htmlStr += '</div>';
    htmlStr += '<div class="user-info__email">';
    htmlStr += '<span class="--user-edit">';
    htmlStr += '<input type="email" id="' + rand + '_email-tb" value="johndoe@example.com">';
    htmlStr += '</span>';
    htmlStr += '<span class="--user-view">johndoe@example.com</span>';
    htmlStr += '</div>';
    htmlStr += '<div class="user-info__bevestigd">nee</div>';
    htmlStr += '<div class="user-info__edit">';
    htmlStr +=
        '<i class="fa fa-pencil-square-o user-info__icon js-user-view-edit --user-view" aria-hidden="true"></i>';
    htmlStr +=
        '<i class="fa fa-floppy-o user-info__icon js-user-view-view --user-edit" id="' +
        rand +
        '" aria-hidden="true"></i>';
    htmlStr += '<div class="loading-dots2 loading-dots2--nomarg --user-load">';
    htmlStr += '<div class="loading-dots2__dot"></div>';
    htmlStr += '<div class="loading-dots2__dot"></div>';
    htmlStr += '<div class="loading-dots2__dot"></div>';
    htmlStr += '</div>';
    htmlStr += '</div>';
    htmlStr += '<div class="user-info__error" id="' + rand + '_error"></div>';
    htmlStr += '</div>';
    $('.js-users').append(htmlStr);
    $('.js-user-view-edit').on('click', function() {
        js_user_view_edit(this);
    });
    $('.js-user-view-view').on('click', function() {
        js_user_view_view(this);
    });
    newUsers.push(rand);
});
$('.js-user-view-edit').on('click', function() {
    js_user_view_edit(this);
});
$('.js-user-view-view').on('click', function() {
    js_user_view_view(this);
});

function js_user_view_edit(elem) {
    addOrRemoveClasses($(elem), 2, ['user-info--is-edit'], ['user-info--is-view']);
}
function js_user_view_view(elem) {
    addOrRemoveClasses(
        $(elem),
        2,
        ['user-info--is-load', 'user-info--is-view'],
        ['user-info--is-edit']
    );
    var elemid = $(elem).attr('id');
    var nameVal = $('#' + elemid + '_naam-tb').val();
    $('#' + elemid + '_naam-tb')
        .parent()
        .siblings()
        .html(nameVal);
    var emailVal = $('#' + elemid + '_email-tb').val();
    $('#' + elemid + '_email-tb')
        .parent()
        .siblings()
        .html(emailVal);
    var token = $('meta[name="csrf-token"]').attr('content');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': token
        }
    });
    $.ajax({
        type: 'POST',
        url: url + 'admin/ajaxsave',
        data: { naam: nameVal, email: emailVal, id: elemid },
        success: function(msg) {
            var obj = JSON.parse(msg);
            console.log(obj);
            console.log(obj.err);
            if (obj.err === undefined) {
                if (typeof obj.edited === 'undefined') {
                    $('#' + elemid + '_naam-tb').attr('id', 'e-' + obj.id + '_naam-tb');
                    $('#' + elemid + '_error').attr('id', 'e-' + obj.id + '_error');
                    $('#' + elemid + '_email-tb').attr('id', 'e-' + obj.id + '_email-tb');
                    $(elem).attr('id', 'e-' + obj.id);
                }
                addOrRemoveClasses($(elem), 2, ['user-info--is-success'], ['user-info--is-load']);
                setTimeout(function() {
                    addOrRemoveClasses($(elem), 2, [], ['user-info--is-success']);
                }, 3000);
            } else {
                addOrRemoveClasses($('#' + elemid + '_error'), 0, ['user-info__error--show']);
                $('#' + elemid + '_error').html(obj.err);
                addOrRemoveClasses(
                    $(elem),
                    2,
                    ['user-info--is-error', 'user-info--is-edit'],
                    ['user-info--is-load', 'user-info--is-view']
                );
                setTimeout(function() {
                    addOrRemoveClasses($(elem), 2, [], ['user-info--is-error']);
                    addOrRemoveClasses(
                        $('#' + elemid + '_error'),
                        0,
                        [],
                        ['user-info__error--show']
                    );
                }, 3000);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
            addOrRemoveClasses(
                $(elem),
                2,
                ['user-info--is-error', 'user-info--is-edit'],
                ['user-info--is-load', 'user-info--is-view']
            );
            setTimeout(function() {
                addOrRemoveClasses($(elem), 2, [], ['user-info--is-error']);
            }, 3000);
        }
    });
}
function addOrRemoveClasses(elem, parentnum = 0, addAr = [], removeArr = []) {
    var tempelem = elem;
    if (parentnum > 0) {
        for (var i = 0; i < parentnum; i++) {
            tempelem = $(tempelem).parent();
        }
    }
    for (var i = 0; i < addAr.length; i++) {
        $(tempelem).addClass(addAr[i]);
    }
    for (var i = 0; i < removeArr.length; i++) {
        $(tempelem).removeClass(removeArr[i]);
    }
}

var url = '/';
var newUsers = [];
function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}
$('.errtooltip').on('input', function() {
    $(this)
        .removeClass('inputerror')
        .tooltip('destroy');
});
$('.c-stars__input').on('click', function() {
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
            var p_elem = $(this).find('p');
            $(p_elem).html('');
            $('.js-stap3-dots').removeClass('--disnone');
            setTimeout(function() {
                $('#all-form').submit();
            }, 10000);
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

var transitionval = $('.mobile-nav').css('transition-duration');
transitionval = transitionval.replace('s', '');
transitionval = transitionval * 1000;

$(document).ready(function() {
    $('.js-preloader-loaded').addClass('preloader--loaded');
    var flashMesBot;
    var flashMesTop;
    if ($('.c-flash-message').length) {
        flashMesTop = $('.c-flash-message').offset().top;
        flashMesBot = $('.c-flash-message').offset().top + $('.c-flash-message').outerHeight();
        console.log('top: ', flashMesTop, 'Bot: ', flashMesBot);
    }

    var elem = document.getElementById('app');
    var navelem = document.getElementById('js-mobile-nav');
    var hammertime = Hammer(navelem).on('swipeleft', function(event) {});
    hammertime = Hammer(elem);
    var hammertime = Hammer(elem).on('swiperight', function(event) {
        var endX = event.center.x;
        var movedX = event.deltaX;
        var startX = endX - movedX;
        var endY = event.center.y;
        var movedY = event.deltaY;
        var startY = endY - movedY;

        if (startX < 80 && endX > 70) {
            expandMobileNav(1);
        }
        if ($('.c-flash-message').length) {
            if (startY >= flashMesTop && startY <= flashMesBot && movedX >= 25) {
                $('.c-flash-message').addClass('c-flash-message--closeSmooth');
            }
        }
    });
    var hammertime = Hammer(elem).on('swipeleft', function(event) {
        var endX = event.center.x;
        var movedX = event.deltaX;
        var startX = endX - movedX;
        if (movedX < -40) {
            expandMobileNav(2);
        }
    });
});
function addnoDisplay() {
    $('.mobile-nav__list').addClass('mobile-nav__list--nodisplay');
    $('.mobile-nav').removeClass('mobile-nav--full-height');
}
function expandMobileNavTime() {
    $('.mobile-nav').addClass('mobile-nav--full-height');
    $('.mobile-nav').addClass('mobile-nav--expanded');
    $('.mobile-nav__list').removeClass('mobile-nav__list--hidden');
    $('.mobile-nav__button').addClass('mobile-nav__button--expanded');
}
function expandMobileNav(mode = 0) {
    if (mode == 0) {
        if (!$('.mobile-nav').hasClass('mobile-nav--expanded')) {
            $('.mobile-nav__list').removeClass('mobile-nav__list--nodisplay');
            setTimeout(expandMobileNavTime, 1);
        } else {
            $('.mobile-nav').removeClass('mobile-nav--expanded');
            $('.mobile-nav__list').addClass('mobile-nav__list--hidden');
            $('.mobile-nav__button').removeClass('mobile-nav__button--expanded');
            setTimeout(addnoDisplay, transitionval);
        }
    }
    if (mode == 1) {
        if (!$('.mobile-nav').hasClass('mobile-nav--expanded')) {
            $('.mobile-nav__list').removeClass('mobile-nav__list--nodisplay');
            setTimeout(expandMobileNavTime, 1);
        }
    }
    if (mode == 2) {
        if ($('.mobile-nav').hasClass('mobile-nav--expanded')) {
            $('.mobile-nav').removeClass('mobile-nav--expanded');
            $('.mobile-nav__list').addClass('mobile-nav__list--hidden');
            $('.mobile-nav__button').removeClass('mobile-nav__button--expanded');
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
    var lastchar = Licenseplate.substring(Licenseplate.length, Licenseplate.length - 1);
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
        var lastchar = Licenseplate.substring(Licenseplate.length, Licenseplate.length - 1);
        lastchar = lastchar.length === 1 && lastchar.match(/[0-9]/i);
        if (first2chars && lastchar) {
            var newstr =
                Licenseplate.slice(0, 2) +
                '-' +
                Licenseplate.slice(2, Licenseplate.length - 1) +
                '-' +
                Licenseplate.slice(Licenseplate.length - 1, Licenseplate.length);
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

var check = [];
var lastScrolltop = 0;
$('.file-caption-name').attr('placeholder', 'Voeg afbeeldingen toe...');
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
    $('[data-toggle="tooltip"]').tooltip(); // initializes bootstrap tooltips
    checkInput('email');
    checkInput('pos');
    checkInput('tel');
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
