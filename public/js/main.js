/*
Creates a random number of given length.
OPTIONS
len            = INT the length of the random created string *NOT OPTIONAL
beforestr      = STRING that is placed before the random string *OPTIONAL
arraytocheck   = ARRAY that the function will check. If the random generated string is already in that array it will loop to create a new one, until it finds a unique one. *OPTIONAL
*/
function randomString2(len, beforestr = '', arraytocheck = null) {
    // Charset, every character in this string is an optional one it can use as a random character.
    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    console.log(arraytocheck);
    for (var i = 0; i < len; i++) {
        // creates a random number between 0 and the charSet length. Rounds it down to a whole number
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    // If an array is given it will check the array, and if the generated string exists in it it will create a new one until a unique one is found *WATCH OUT. If all available options are used it will cause a loop it cannot break out*
    if (arraytocheck == null) {
        return beforestr + randomString;
    } else {
        var isIn = $.inArray(beforestr + randomString, arraytocheck); // checks if the string is in the array, returns a position
        if (isIn > -1) {
            // if the position is not -1 (meaning, it is not in the array) it will start doing a loop
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
    // creates a random string to give it a random id. Uses a self-written function
    var rand = randomString2(10, 'r-', newUsers, 1);
    newUsers.push(rand); // pushes the newly created random string in the global array.
    // Will create a long string to make the new user-info element
    var htmlStr = '';
    htmlStr += '<div class="user-info user-info--is-edit delete-overlay">';
    htmlStr += '<div class="delete-overlay__deletecontainer">';
    htmlStr +=
        '<p class="delete-overlay__child delete-overlay__text">Je staat op het punt om deze autodealer te verwijderen. Weet je het zeker?</p>';
    htmlStr += '<div class="delete-overlay__child">';
    htmlStr +=
        '<a href="#" data-id="' +
        rand +
        '" id="' +
        rand +
        '_delete-ref"  class="alert-link js-delete-yes">Ja</a>';
    htmlStr += '<a href="#" class="alert-link js-delete-no">Nee</a>';
    htmlStr += '</div>';
    htmlStr += '</div>';

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
    htmlStr +=
        '<i class="fa fa-trash-o js-user-delete user-info__icon user-info__icon--marginl --user-view"  aria-hidden="true"></i>';
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
    $('.js-user-delete').on('click', function() {
        js_user_delete(this);
    });
    $('.js-delete-no').on('click', function() {
        js_user_delete_no(this);
    });
    $('.js-delete-yes').on('click', function() {
        js_user_delete_yes(this);
    });
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
                    $('#' + elemid + '_delete-ref').attr('data-id', 'e-' + obj.id);
                    $('#' + elemid + '_delete-ref').attr('id', '');
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

// Delete button and everything associated with it
function js_user_delete(elem) {
    addOrRemoveClasses($(elem), 2, ['delete-overlay--delete']);
}
function js_user_delete_no(elem) {
    addOrRemoveClasses($(elem), 3, [], ['delete-overlay--delete']);
}
function js_user_delete_yes(elem) {
    var idToDel = $(elem).attr('data-id');
    var token = $('meta[name="csrf-token"]').attr('content');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': token
        }
    });
    $.ajax({
        type: 'POST',
        url: url + 'admin/delete-dealer',
        data: { id: idToDel },
        success: function(msg) {
            var obj = JSON.parse(msg);
            console.log(obj);
            console.log(obj.err);
            if (obj.err === undefined) {
                addOrRemoveClasses(elem, 3, ['delete-overlay--is-deleted'], []);
                setTimeout(function() {
                    addOrRemoveClasses(elem, 3, ['user-info--is-deleted'], []);
                    setTimeout(function() {
                        $(elem)
                            .parent()
                            .parent()
                            .parent()
                            .remove();
                    }, 200);
                }, 200);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
        }
    });
}
$('.js-user-delete').on('click', function() {
    js_user_delete(this);
});
$('.js-delete-no').on('click', function() {
    js_user_delete_no(this);
});
$('.js-delete-yes').on('click', function() {
    js_user_delete_yes(this);
});

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXNhdmUtdXNlci5qcyIsImNsaWNrRnVuY3Rpb25zLmpzIiwiZnVuY3Rpb25zLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgb2YgZ2l2ZW4gbGVuZ3RoLlxyXG5PUFRJT05TXHJcbmxlbiAgICAgICAgICAgID0gSU5UIHRoZSBsZW5ndGggb2YgdGhlIHJhbmRvbSBjcmVhdGVkIHN0cmluZyAqTk9UIE9QVElPTkFMXHJcbmJlZm9yZXN0ciAgICAgID0gU1RSSU5HIHRoYXQgaXMgcGxhY2VkIGJlZm9yZSB0aGUgcmFuZG9tIHN0cmluZyAqT1BUSU9OQUxcclxuYXJyYXl0b2NoZWNrICAgPSBBUlJBWSB0aGF0IHRoZSBmdW5jdGlvbiB3aWxsIGNoZWNrLiBJZiB0aGUgcmFuZG9tIGdlbmVyYXRlZCBzdHJpbmcgaXMgYWxyZWFkeSBpbiB0aGF0IGFycmF5IGl0IHdpbGwgbG9vcCB0byBjcmVhdGUgYSBuZXcgb25lLCB1bnRpbCBpdCBmaW5kcyBhIHVuaXF1ZSBvbmUuICpPUFRJT05BTFxyXG4qL1xyXG5mdW5jdGlvbiByYW5kb21TdHJpbmcyKGxlbiwgYmVmb3Jlc3RyID0gJycsIGFycmF5dG9jaGVjayA9IG51bGwpIHtcclxuICAgIC8vIENoYXJzZXQsIGV2ZXJ5IGNoYXJhY3RlciBpbiB0aGlzIHN0cmluZyBpcyBhbiBvcHRpb25hbCBvbmUgaXQgY2FuIHVzZSBhcyBhIHJhbmRvbSBjaGFyYWN0ZXIuXHJcbiAgICB2YXIgY2hhclNldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcclxuICAgIHZhciByYW5kb21TdHJpbmcgPSAnJztcclxuICAgIGNvbnNvbGUubG9nKGFycmF5dG9jaGVjayk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCB0aGUgY2hhclNldCBsZW5ndGguIFJvdW5kcyBpdCBkb3duIHRvIGEgd2hvbGUgbnVtYmVyXHJcbiAgICAgICAgdmFyIHJhbmRvbVBveiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJTZXQubGVuZ3RoKTtcclxuICAgICAgICByYW5kb21TdHJpbmcgKz0gY2hhclNldC5zdWJzdHJpbmcocmFuZG9tUG96LCByYW5kb21Qb3ogKyAxKTtcclxuICAgIH1cclxuICAgIC8vIElmIGFuIGFycmF5IGlzIGdpdmVuIGl0IHdpbGwgY2hlY2sgdGhlIGFycmF5LCBhbmQgaWYgdGhlIGdlbmVyYXRlZCBzdHJpbmcgZXhpc3RzIGluIGl0IGl0IHdpbGwgY3JlYXRlIGEgbmV3IG9uZSB1bnRpbCBhIHVuaXF1ZSBvbmUgaXMgZm91bmQgKldBVENIIE9VVC4gSWYgYWxsIGF2YWlsYWJsZSBvcHRpb25zIGFyZSB1c2VkIGl0IHdpbGwgY2F1c2UgYSBsb29wIGl0IGNhbm5vdCBicmVhayBvdXQqXHJcbiAgICBpZiAoYXJyYXl0b2NoZWNrID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gYmVmb3Jlc3RyICsgcmFuZG9tU3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaXNJbiA9ICQuaW5BcnJheShiZWZvcmVzdHIgKyByYW5kb21TdHJpbmcsIGFycmF5dG9jaGVjayk7IC8vIGNoZWNrcyBpZiB0aGUgc3RyaW5nIGlzIGluIHRoZSBhcnJheSwgcmV0dXJucyBhIHBvc2l0aW9uXHJcbiAgICAgICAgaWYgKGlzSW4gPiAtMSkge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgcG9zaXRpb24gaXMgbm90IC0xIChtZWFuaW5nLCBpdCBpcyBub3QgaW4gdGhlIGFycmF5KSBpdCB3aWxsIHN0YXJ0IGRvaW5nIGEgbG9vcFxyXG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21TdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZG9tUG96ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhclNldC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVN0cmluZyArPSBjaGFyU2V0LnN1YnN0cmluZyhyYW5kb21Qb3osIHJhbmRvbVBveiArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNJbiA9ICQuaW5BcnJheShiZWZvcmVzdHIgKyByYW5kb21TdHJpbmcsIGFycmF5dG9jaGVjayk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChpc0luID4gLTEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXQgdG9vayAnICsgY291bnQgKyAnIHRyaWVzJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBiZWZvcmVzdHIgKyByYW5kb21TdHJpbmc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJlZm9yZXN0ciArIHJhbmRvbVN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuJCgnLmpzLWFkZC11c2VyLWFkbWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBjcmVhdGVzIGEgcmFuZG9tIHN0cmluZyB0byBnaXZlIGl0IGEgcmFuZG9tIGlkLiBVc2VzIGEgc2VsZi13cml0dGVuIGZ1bmN0aW9uXHJcbiAgICB2YXIgcmFuZCA9IHJhbmRvbVN0cmluZzIoMTAsICdyLScsIG5ld1VzZXJzLCAxKTtcclxuICAgIG5ld1VzZXJzLnB1c2gocmFuZCk7IC8vIHB1c2hlcyB0aGUgbmV3bHkgY3JlYXRlZCByYW5kb20gc3RyaW5nIGluIHRoZSBnbG9iYWwgYXJyYXkuXHJcbiAgICAvLyBXaWxsIGNyZWF0ZSBhIGxvbmcgc3RyaW5nIHRvIG1ha2UgdGhlIG5ldyB1c2VyLWluZm8gZWxlbWVudFxyXG4gICAgdmFyIGh0bWxTdHIgPSAnJztcclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJ1c2VyLWluZm8gdXNlci1pbmZvLS1pcy1lZGl0IGRlbGV0ZS1vdmVybGF5XCI+JztcclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJkZWxldGUtb3ZlcmxheV9fZGVsZXRlY29udGFpbmVyXCI+JztcclxuICAgIGh0bWxTdHIgKz1cclxuICAgICAgICAnPHAgY2xhc3M9XCJkZWxldGUtb3ZlcmxheV9fY2hpbGQgZGVsZXRlLW92ZXJsYXlfX3RleHRcIj5KZSBzdGFhdCBvcCBoZXQgcHVudCBvbSBkZXplIGF1dG9kZWFsZXIgdGUgdmVyd2lqZGVyZW4uIFdlZXQgamUgaGV0IHpla2VyPzwvcD4nO1xyXG4gICAgaHRtbFN0ciArPSAnPGRpdiBjbGFzcz1cImRlbGV0ZS1vdmVybGF5X19jaGlsZFwiPic7XHJcbiAgICBodG1sU3RyICs9XHJcbiAgICAgICAgJzxhIGhyZWY9XCIjXCIgZGF0YS1pZD1cIicgK1xyXG4gICAgICAgIHJhbmQgK1xyXG4gICAgICAgICdcIiBpZD1cIicgK1xyXG4gICAgICAgIHJhbmQgK1xyXG4gICAgICAgICdfZGVsZXRlLXJlZlwiICBjbGFzcz1cImFsZXJ0LWxpbmsganMtZGVsZXRlLXllc1wiPkphPC9hPic7XHJcbiAgICBodG1sU3RyICs9ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYWxlcnQtbGluayBqcy1kZWxldGUtbm9cIj5OZWU8L2E+JztcclxuICAgIGh0bWxTdHIgKz0gJzwvZGl2Pic7XHJcbiAgICBodG1sU3RyICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJ1c2VyLWluZm9fX25hYW1cIj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPHNwYW4gY2xhc3M9XCItLXVzZXItZWRpdFwiPic7XHJcbiAgICBodG1sU3RyICs9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIicgKyByYW5kICsgJ19uYWFtLXRiXCIgdmFsdWU9XCJKb2huIERvZVwiPic7XHJcbiAgICBodG1sU3RyICs9ICc8L3NwYW4+JztcclxuICAgIGh0bWxTdHIgKz0gJzxzcGFuIGNsYXNzPVwiLS11c2VyLXZpZXdcIj5Kb2huIERvZTwvc3Bhbj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPC9kaXY+JztcclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJ1c2VyLWluZm9fX2VtYWlsXCI+JztcclxuICAgIGh0bWxTdHIgKz0gJzxzcGFuIGNsYXNzPVwiLS11c2VyLWVkaXRcIj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiJyArIHJhbmQgKyAnX2VtYWlsLXRiXCIgdmFsdWU9XCJqb2huZG9lQGV4YW1wbGUuY29tXCI+JztcclxuICAgIGh0bWxTdHIgKz0gJzwvc3Bhbj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPHNwYW4gY2xhc3M9XCItLXVzZXItdmlld1wiPmpvaG5kb2VAZXhhbXBsZS5jb208L3NwYW4+JztcclxuICAgIGh0bWxTdHIgKz0gJzwvZGl2Pic7XHJcbiAgICBodG1sU3RyICs9ICc8ZGl2IGNsYXNzPVwidXNlci1pbmZvX19iZXZlc3RpZ2RcIj5uZWU8L2Rpdj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPGRpdiBjbGFzcz1cInVzZXItaW5mb19fZWRpdFwiPic7XHJcbiAgICBodG1sU3RyICs9XHJcbiAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vIHVzZXItaW5mb19faWNvbiBqcy11c2VyLXZpZXctZWRpdCAtLXVzZXItdmlld1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xyXG4gICAgaHRtbFN0ciArPVxyXG4gICAgICAgICc8aSBjbGFzcz1cImZhIGZhLWZsb3BweS1vIHVzZXItaW5mb19faWNvbiBqcy11c2VyLXZpZXctdmlldyAtLXVzZXItZWRpdFwiIGlkPVwiJyArXHJcbiAgICAgICAgcmFuZCArXHJcbiAgICAgICAgJ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xyXG4gICAgaHRtbFN0ciArPVxyXG4gICAgICAgICc8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW8ganMtdXNlci1kZWxldGUgdXNlci1pbmZvX19pY29uIHVzZXItaW5mb19faWNvbi0tbWFyZ2lubCAtLXVzZXItdmlld1wiICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJsb2FkaW5nLWRvdHMyIGxvYWRpbmctZG90czItLW5vbWFyZyAtLXVzZXItbG9hZFwiPic7XHJcbiAgICBodG1sU3RyICs9ICc8ZGl2IGNsYXNzPVwibG9hZGluZy1kb3RzMl9fZG90XCI+PC9kaXY+JztcclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJsb2FkaW5nLWRvdHMyX19kb3RcIj48L2Rpdj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctZG90czJfX2RvdFwiPjwvZGl2Pic7XHJcbiAgICBodG1sU3RyICs9ICc8L2Rpdj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPC9kaXY+JztcclxuICAgIGh0bWxTdHIgKz0gJzxkaXYgY2xhc3M9XCJ1c2VyLWluZm9fX2Vycm9yXCIgaWQ9XCInICsgcmFuZCArICdfZXJyb3JcIj48L2Rpdj4nO1xyXG4gICAgaHRtbFN0ciArPSAnPC9kaXY+JztcclxuICAgICQoJy5qcy11c2VycycpLmFwcGVuZChodG1sU3RyKTtcclxuICAgICQoJy5qcy11c2VyLXZpZXctZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpzX3VzZXJfdmlld19lZGl0KHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuanMtdXNlci12aWV3LXZpZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqc191c2VyX3ZpZXdfdmlldyh0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmpzLXVzZXItZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAganNfdXNlcl9kZWxldGUodGhpcyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5qcy1kZWxldGUtbm8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqc191c2VyX2RlbGV0ZV9ubyh0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmpzLWRlbGV0ZS15ZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBqc191c2VyX2RlbGV0ZV95ZXModGhpcyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiQoJy5qcy11c2VyLXZpZXctZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAganNfdXNlcl92aWV3X2VkaXQodGhpcyk7XHJcbn0pO1xyXG4kKCcuanMtdXNlci12aWV3LXZpZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGpzX3VzZXJfdmlld192aWV3KHRoaXMpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGpzX3VzZXJfdmlld19lZGl0KGVsZW0pIHtcclxuICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcygkKGVsZW0pLCAyLCBbJ3VzZXItaW5mby0taXMtZWRpdCddLCBbJ3VzZXItaW5mby0taXMtdmlldyddKTtcclxufVxyXG5mdW5jdGlvbiBqc191c2VyX3ZpZXdfdmlldyhlbGVtKSB7XHJcbiAgICBhZGRPclJlbW92ZUNsYXNzZXMoXHJcbiAgICAgICAgJChlbGVtKSxcclxuICAgICAgICAyLFxyXG4gICAgICAgIFsndXNlci1pbmZvLS1pcy1sb2FkJywgJ3VzZXItaW5mby0taXMtdmlldyddLFxyXG4gICAgICAgIFsndXNlci1pbmZvLS1pcy1lZGl0J11cclxuICAgICk7XHJcbiAgICB2YXIgZWxlbWlkID0gJChlbGVtKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIG5hbWVWYWwgPSAkKCcjJyArIGVsZW1pZCArICdfbmFhbS10YicpLnZhbCgpO1xyXG4gICAgJCgnIycgKyBlbGVtaWQgKyAnX25hYW0tdGInKVxyXG4gICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgLmh0bWwobmFtZVZhbCk7XHJcbiAgICB2YXIgZW1haWxWYWwgPSAkKCcjJyArIGVsZW1pZCArICdfZW1haWwtdGInKS52YWwoKTtcclxuICAgICQoJyMnICsgZWxlbWlkICsgJ19lbWFpbC10YicpXHJcbiAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAuaHRtbChlbWFpbFZhbCk7XHJcbiAgICB2YXIgdG9rZW4gPSAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpO1xyXG4gICAgJC5hamF4U2V0dXAoe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IHVybCArICdhZG1pbi9hamF4c2F2ZScsXHJcbiAgICAgICAgZGF0YTogeyBuYWFtOiBuYW1lVmFsLCBlbWFpbDogZW1haWxWYWwsIGlkOiBlbGVtaWQgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UobXNnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqLmVycik7XHJcbiAgICAgICAgICAgIGlmIChvYmouZXJyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmVkaXRlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGVsZW1pZCArICdfbmFhbS10YicpLmF0dHIoJ2lkJywgJ2UtJyArIG9iai5pZCArICdfbmFhbS10YicpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgZWxlbWlkICsgJ19lcnJvcicpLmF0dHIoJ2lkJywgJ2UtJyArIG9iai5pZCArICdfZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGVsZW1pZCArICdfZW1haWwtdGInKS5hdHRyKCdpZCcsICdlLScgKyBvYmouaWQgKyAnX2VtYWlsLXRiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBlbGVtaWQgKyAnX2RlbGV0ZS1yZWYnKS5hdHRyKCdkYXRhLWlkJywgJ2UtJyArIG9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBlbGVtaWQgKyAnX2RlbGV0ZS1yZWYnKS5hdHRyKCdpZCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW0pLmF0dHIoJ2lkJywgJ2UtJyArIG9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzZXMoJChlbGVtKSwgMiwgWyd1c2VyLWluZm8tLWlzLXN1Y2Nlc3MnXSwgWyd1c2VyLWluZm8tLWlzLWxvYWQnXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcygkKGVsZW0pLCAyLCBbXSwgWyd1c2VyLWluZm8tLWlzLXN1Y2Nlc3MnXSk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcygkKCcjJyArIGVsZW1pZCArICdfZXJyb3InKSwgMCwgWyd1c2VyLWluZm9fX2Vycm9yLS1zaG93J10pO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBlbGVtaWQgKyAnX2Vycm9yJykuaHRtbChvYmouZXJyKTtcclxuICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcyhcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW0pLFxyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgWyd1c2VyLWluZm8tLWlzLWVycm9yJywgJ3VzZXItaW5mby0taXMtZWRpdCddLFxyXG4gICAgICAgICAgICAgICAgICAgIFsndXNlci1pbmZvLS1pcy1sb2FkJywgJ3VzZXItaW5mby0taXMtdmlldyddXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzZXMoJChlbGVtKSwgMiwgW10sIFsndXNlci1pbmZvLS1pcy1lcnJvciddKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgZWxlbWlkICsgJ19lcnJvcicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyd1c2VyLWluZm9fX2Vycm9yLS1zaG93J11cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aHJvd25FcnJvcik7XHJcbiAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcyhcclxuICAgICAgICAgICAgICAgICQoZWxlbSksXHJcbiAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgWyd1c2VyLWluZm8tLWlzLWVycm9yJywgJ3VzZXItaW5mby0taXMtZWRpdCddLFxyXG4gICAgICAgICAgICAgICAgWyd1c2VyLWluZm8tLWlzLWxvYWQnLCAndXNlci1pbmZvLS1pcy12aWV3J11cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcygkKGVsZW0pLCAyLCBbXSwgWyd1c2VyLWluZm8tLWlzLWVycm9yJ10pO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzZXMoZWxlbSwgcGFyZW50bnVtID0gMCwgYWRkQXIgPSBbXSwgcmVtb3ZlQXJyID0gW10pIHtcclxuICAgIHZhciB0ZW1wZWxlbSA9IGVsZW07XHJcbiAgICBpZiAocGFyZW50bnVtID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50bnVtOyBpKyspIHtcclxuICAgICAgICAgICAgdGVtcGVsZW0gPSAkKHRlbXBlbGVtKS5wYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFkZEFyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJCh0ZW1wZWxlbSkuYWRkQ2xhc3MoYWRkQXJbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAkKHRlbXBlbGVtKS5yZW1vdmVDbGFzcyhyZW1vdmVBcnJbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZWxldGUgYnV0dG9uIGFuZCBldmVyeXRoaW5nIGFzc29jaWF0ZWQgd2l0aCBpdFxyXG5mdW5jdGlvbiBqc191c2VyX2RlbGV0ZShlbGVtKSB7XHJcbiAgICBhZGRPclJlbW92ZUNsYXNzZXMoJChlbGVtKSwgMiwgWydkZWxldGUtb3ZlcmxheS0tZGVsZXRlJ10pO1xyXG59XHJcbmZ1bmN0aW9uIGpzX3VzZXJfZGVsZXRlX25vKGVsZW0pIHtcclxuICAgIGFkZE9yUmVtb3ZlQ2xhc3NlcygkKGVsZW0pLCAzLCBbXSwgWydkZWxldGUtb3ZlcmxheS0tZGVsZXRlJ10pO1xyXG59XHJcbmZ1bmN0aW9uIGpzX3VzZXJfZGVsZXRlX3llcyhlbGVtKSB7XHJcbiAgICB2YXIgaWRUb0RlbCA9ICQoZWxlbSkuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgdmFyIHRva2VuID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiB1cmwgKyAnYWRtaW4vZGVsZXRlLWRlYWxlcicsXHJcbiAgICAgICAgZGF0YTogeyBpZDogaWRUb0RlbCB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShtc2cpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouZXJyKTtcclxuICAgICAgICAgICAgaWYgKG9iai5lcnIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYWRkT3JSZW1vdmVDbGFzc2VzKGVsZW0sIDMsIFsnZGVsZXRlLW92ZXJsYXktLWlzLWRlbGV0ZWQnXSwgW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRPclJlbW92ZUNsYXNzZXMoZWxlbSwgMywgWyd1c2VyLWluZm8tLWlzLWRlbGV0ZWQnXSwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhocik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRocm93bkVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4kKCcuanMtdXNlci1kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGpzX3VzZXJfZGVsZXRlKHRoaXMpO1xyXG59KTtcclxuJCgnLmpzLWRlbGV0ZS1ubycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAganNfdXNlcl9kZWxldGVfbm8odGhpcyk7XHJcbn0pO1xyXG4kKCcuanMtZGVsZXRlLXllcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAganNfdXNlcl9kZWxldGVfeWVzKHRoaXMpO1xyXG59KTtcclxuIiwidmFyIHVybCA9ICcvJztcclxudmFyIG5ld1VzZXJzID0gW107XHJcbmZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcclxuICAgIHJldHVybiAvXi0/W1xcZC5dKyg/OmUtP1xcZCspPyQvLnRlc3Qobik7XHJcbn1cclxuJCgnLmVycnRvb2x0aXAnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcylcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lucHV0ZXJyb3InKVxyXG4gICAgICAgIC50b29sdGlwKCdkZXN0cm95Jyk7XHJcbn0pO1xyXG4kKCcuYy1zdGFyc19faW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGlzTmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgaWYgKCQoXCJpbnB1dDpyYWRpb1tuYW1lPSdcIiArIHRoaXNOYW1lICsgXCInXVwiKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lucHV0ZXJyb3InKVxyXG4gICAgICAgICAgICAudG9vbHRpcCgnZGVzdHJveScpO1xyXG4gICAgfVxyXG59KTtcclxuJCgnI2dhLWRvb3InKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJyNzdmctcm9sJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB2YXIgZW1haWx2YWxpZCA9IGNoZWNrSW5wdXQoJ2VtYWlsJywgMSk7XHJcbiAgICB2YXIgcG9zdmFsaWQgPSBjaGVja0lucHV0KCdwb3MnLCAxKTtcclxuICAgIHZhciB0ZWx2YWxpZCA9IGNoZWNrSW5wdXQoJ3RlbCcsIDEpO1xyXG4gICAgaWYgKGVtYWlsdmFsaWQgJiYgcG9zdmFsaWQgJiYgdGVsdmFsaWQpIHtcclxuICAgICAgICAkKCcjYWxsLWZvcm0nKS5zdWJtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2dvdG9zdGFwMicpLmNsaWNrKCk7XHJcbiAgICB9XHJcbn0pO1xyXG52YXIgdG9nZ2xlRWxlbTtcclxuJCgnLmNoZWNrLXN0YXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdG9nZ2xlJykgPT0gJ3RhYicpIHtcclxuICAgICAgICB0b2dnbGVFbGVtID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRvZ2dsZUVsZW0pLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJycpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgICAgICB2YXIgcF9lbGVtID0gJCh0aGlzKS5maW5kKCdwJyk7XHJcbiAgICAgICAgICAgICQocF9lbGVtKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgJCgnLmpzLXN0YXAzLWRvdHMnKS5yZW1vdmVDbGFzcygnLS1kaXNub25lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWxsLWZvcm0nKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcGFyZW50X3RhYl9wYW5lID0gJCh0aGlzKS5wYXJlbnRzKCcudGFiLXBhbmUnKTtcclxuICAgIHZhciBlcnJvcnMgPSBbXTtcclxuICAgIHBhcmVudF90YWJfcGFuZVxyXG4gICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0saW5wdXRbdHlwZT1cInJhZGlvXCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9ICQodGhpcykuYXR0cigndHlwZScpO1xyXG4gICAgICAgICAgICB2YXIgaXNudW0gPSBpc051bWJlcigkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHR5cGUgaXMgTk9UIHJhZGlvXHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eSBpdCBhZGRzIHRoZSB0b29sdGlwLCBkZXBlbmRpbmcgb24gd2hhdCBraW5kIG9mIGlucHV0IGl0IGlzLCBpdCBwdXRzIGl0IG9uIHRoZSBwYXJlbnQgb3Igbm90XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyRWxlbTtcclxuICAgICAgICAgICAgICAgIC8vIFNldHMgdGhlIGVsZW1lbnQgdGhhdCBuZWVkcyB0aGUgdG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLXBhcmVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyRWxlbSA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdmFsIGlzIGVtcHR5IHRoZSBhYm92ZSBlbGVtZW50IHdpbGwgZ2V0IHRvb2x0aXBwZWRcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJCh0aGlzKS5hdHRyKCduYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvb2x0aXAoY3VyRWxlbSwgJ0RpdCB2ZWxkIGlzIHZlcnBsaWNodCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVUb29sdGlwKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHR5cGUgaXMgbnVtYmVyIGl0IGFsc28gY2hlY2tzIGlmIHRoZSB0ZXh0IGluIGl0IGlzIGEgbnVtYmVyIChwb2ludGxlc3MgaWYgY29uc29sZSBkZXYgY2hhbmdlZCB0eXBlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLXBhcmVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzbnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCQodGhpcykuYXR0cignbmFtZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9vbHRpcChlbGVtLCAnRGl0IHZlbGQgbW9ldCBlZW4gZ2V0YWwgaGViYmVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIHNwZWNpYWwgYnVsbHNoaXQgaWYgdGhlIHR5cGUgaXMgcmFkaW9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzTmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKFwiaW5wdXQ6cmFkaW9bbmFtZT0nXCIgKyB0aGlzTmFtZSArIFwiJ11cIikuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgkKHRoaXMpLmF0dHIoJ25hbWUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9vbHRpcChlbGVtLCAnRGl0IHZlbGQgaXMgdmVycGxpY2h0Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRvb2x0aXAoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIC8vIElmIHRoZSBjdXJyZW50IHNjcmVlbiBpcyBzdGVwMiwgaXQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiB0aGUgMyBpbnB1dHNcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2hyZWYnKSA9PSAnI3N0ZXAzJykge1xyXG4gICAgICAgIHZhciBlbWFpbHZhbGlkID0gY2hlY2tJbnB1dCgnZW1haWwnLCAxLCAxKTtcclxuICAgICAgICB2YXIgcG9zdmFsaWQgPSBjaGVja0lucHV0KCdwb3MnLCAxLCAxKTtcclxuICAgICAgICB2YXIgdGVsdmFsaWQgPSBjaGVja0lucHV0KCd0ZWwnLCAxLCAxKTtcclxuICAgICAgICBpZiAoIWVtYWlsdmFsaWQgfHwgIXBvc3ZhbGlkIHx8ICF0ZWx2YWxpZCkge1xyXG4gICAgICAgICAgICBlcnJvcnMucHVzaCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnc3VibWl0Jykge1xyXG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlsZS1jYXB0aW9uLW5hbWUnKVswXTtcclxuICAgICAgICBpZiAoZWxlbS50aXRsZSA9PSAnJykge1xyXG4gICAgICAgICAgICBlcnJvcnMucHVzaCgnRW1wdHknKTtcclxuICAgICAgICAgICAgc2V0VG9vbHRpcCgkKCcuZmlsZS1jYXB0aW9uLW1haW4nKSwgJ1VwbG9hZCBlZW4gYWZiZWVsZGluZycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXAoJCgnLmZpbGUtY2FwdGlvbi1tYWluJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICQodGhpcykuYXR0cignZGF0YS10b2dnbGUnLCAndGFiJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbGljaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoJy5qcy1jbG9zZS1mbGFzaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmMtZmxhc2gtbWVzc2FnZScpLmFkZENsYXNzKCdjLWZsYXNoLW1lc3NhZ2UtLWNsb3NlJyk7XHJcbn0pO1xyXG4kKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG4kKCcuanMtbW9iaWxlLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgZXhwYW5kTW9iaWxlTmF2KCk7XHJcbn0pO1xyXG4iLCJ2YXIgdHJhbnNpdGlvbnZhbCA9ICQoJy5tb2JpbGUtbmF2JykuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbnRyYW5zaXRpb252YWwgPSB0cmFuc2l0aW9udmFsLnJlcGxhY2UoJ3MnLCAnJyk7XHJcbnRyYW5zaXRpb252YWwgPSB0cmFuc2l0aW9udmFsICogMTAwMDtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmpzLXByZWxvYWRlci1sb2FkZWQnKS5hZGRDbGFzcygncHJlbG9hZGVyLS1sb2FkZWQnKTtcclxuICAgIHZhciBmbGFzaE1lc0JvdDtcclxuICAgIHZhciBmbGFzaE1lc1RvcDtcclxuICAgIGlmICgkKCcuYy1mbGFzaC1tZXNzYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgZmxhc2hNZXNUb3AgPSAkKCcuYy1mbGFzaC1tZXNzYWdlJykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIGZsYXNoTWVzQm90ID0gJCgnLmMtZmxhc2gtbWVzc2FnZScpLm9mZnNldCgpLnRvcCArICQoJy5jLWZsYXNoLW1lc3NhZ2UnKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b3A6ICcsIGZsYXNoTWVzVG9wLCAnQm90OiAnLCBmbGFzaE1lc0JvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbiAgICB2YXIgbmF2ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1tb2JpbGUtbmF2Jyk7XHJcbiAgICB2YXIgaGFtbWVydGltZSA9IEhhbW1lcihuYXZlbGVtKS5vbignc3dpcGVsZWZ0JywgZnVuY3Rpb24oZXZlbnQpIHt9KTtcclxuICAgIGhhbW1lcnRpbWUgPSBIYW1tZXIoZWxlbSk7XHJcbiAgICB2YXIgaGFtbWVydGltZSA9IEhhbW1lcihlbGVtKS5vbignc3dpcGVyaWdodCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGVuZFggPSBldmVudC5jZW50ZXIueDtcclxuICAgICAgICB2YXIgbW92ZWRYID0gZXZlbnQuZGVsdGFYO1xyXG4gICAgICAgIHZhciBzdGFydFggPSBlbmRYIC0gbW92ZWRYO1xyXG4gICAgICAgIHZhciBlbmRZID0gZXZlbnQuY2VudGVyLnk7XHJcbiAgICAgICAgdmFyIG1vdmVkWSA9IGV2ZW50LmRlbHRhWTtcclxuICAgICAgICB2YXIgc3RhcnRZID0gZW5kWSAtIG1vdmVkWTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0WCA8IDgwICYmIGVuZFggPiA3MCkge1xyXG4gICAgICAgICAgICBleHBhbmRNb2JpbGVOYXYoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKCcuYy1mbGFzaC1tZXNzYWdlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydFkgPj0gZmxhc2hNZXNUb3AgJiYgc3RhcnRZIDw9IGZsYXNoTWVzQm90ICYmIG1vdmVkWCA+PSAyNSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmMtZmxhc2gtbWVzc2FnZScpLmFkZENsYXNzKCdjLWZsYXNoLW1lc3NhZ2UtLWNsb3NlU21vb3RoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBoYW1tZXJ0aW1lID0gSGFtbWVyKGVsZW0pLm9uKCdzd2lwZWxlZnQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHZhciBlbmRYID0gZXZlbnQuY2VudGVyLng7XHJcbiAgICAgICAgdmFyIG1vdmVkWCA9IGV2ZW50LmRlbHRhWDtcclxuICAgICAgICB2YXIgc3RhcnRYID0gZW5kWCAtIG1vdmVkWDtcclxuICAgICAgICBpZiAobW92ZWRYIDwgLTQwKSB7XHJcbiAgICAgICAgICAgIGV4cGFuZE1vYmlsZU5hdigyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIGFkZG5vRGlzcGxheSgpIHtcclxuICAgICQoJy5tb2JpbGUtbmF2X19saXN0JykuYWRkQ2xhc3MoJ21vYmlsZS1uYXZfX2xpc3QtLW5vZGlzcGxheScpO1xyXG4gICAgJCgnLm1vYmlsZS1uYXYnKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi0tZnVsbC1oZWlnaHQnKTtcclxufVxyXG5mdW5jdGlvbiBleHBhbmRNb2JpbGVOYXZUaW1lKCkge1xyXG4gICAgJCgnLm1vYmlsZS1uYXYnKS5hZGRDbGFzcygnbW9iaWxlLW5hdi0tZnVsbC1oZWlnaHQnKTtcclxuICAgICQoJy5tb2JpbGUtbmF2JykuYWRkQ2xhc3MoJ21vYmlsZS1uYXYtLWV4cGFuZGVkJyk7XHJcbiAgICAkKCcubW9iaWxlLW5hdl9fbGlzdCcpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2X19saXN0LS1oaWRkZW4nKTtcclxuICAgICQoJy5tb2JpbGUtbmF2X19idXR0b24nKS5hZGRDbGFzcygnbW9iaWxlLW5hdl9fYnV0dG9uLS1leHBhbmRlZCcpO1xyXG59XHJcbmZ1bmN0aW9uIGV4cGFuZE1vYmlsZU5hdihtb2RlID0gMCkge1xyXG4gICAgaWYgKG1vZGUgPT0gMCkge1xyXG4gICAgICAgIGlmICghJCgnLm1vYmlsZS1uYXYnKS5oYXNDbGFzcygnbW9iaWxlLW5hdi0tZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlLW5hdl9fbGlzdCcpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2X19saXN0LS1ub2Rpc3BsYXknKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChleHBhbmRNb2JpbGVOYXZUaW1lLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlLW5hdicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LS1leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlLW5hdl9fbGlzdCcpLmFkZENsYXNzKCdtb2JpbGUtbmF2X19saXN0LS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnLm1vYmlsZS1uYXZfX2J1dHRvbicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2X19idXR0b24tLWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWRkbm9EaXNwbGF5LCB0cmFuc2l0aW9udmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobW9kZSA9PSAxKSB7XHJcbiAgICAgICAgaWYgKCEkKCcubW9iaWxlLW5hdicpLmhhc0NsYXNzKCdtb2JpbGUtbmF2LS1leHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICQoJy5tb2JpbGUtbmF2X19saXN0JykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1uYXZfX2xpc3QtLW5vZGlzcGxheScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGV4cGFuZE1vYmlsZU5hdlRpbWUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtb2RlID09IDIpIHtcclxuICAgICAgICBpZiAoJCgnLm1vYmlsZS1uYXYnKS5oYXNDbGFzcygnbW9iaWxlLW5hdi0tZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlLW5hdicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LS1leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlLW5hdl9fbGlzdCcpLmFkZENsYXNzKCdtb2JpbGUtbmF2X19saXN0LS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnLm1vYmlsZS1uYXZfX2J1dHRvbicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2X19idXR0b24tLWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWRkbm9EaXNwbGF5LCB0cmFuc2l0aW9udmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJbnB1dChuYW1lLCBtb2RlID0gMCwgZXJtb2RlID0gMCkge1xyXG4gICAgdmFyIHRlc3QgPSB7XHJcbiAgICAgICAgZW1haWw6IFtcclxuICAgICAgICAgICAgL14oW1xcdy1dKyg/OlxcLltcXHctXSspKilAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJC9pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwb3M6IFsvXlsxLTldezF9WzAtOV17M30gP1tBLVpdezJ9JC9pXSxcclxuICAgICAgICB0ZWw6IFtcclxuICAgICAgICAgICAgL14oKCgwKVsxLTldezJ9WzAtOV1bLV0/WzEtOV1bMC05XXs1fSl8KChcXFxcKzMxfDB8MDAzMXwzMSlbMS05XVswLTldWy1dP1sxLTldWzAtOV17Nn0pKSQvLFxyXG4gICAgICAgICAgICAvXigoKFxcXFwrMzF8MHwwMDMxfDAzMXwzMSk2KXsxfVsxLTldezF9WzAtOV17N30pJC9pLFxyXG4gICAgICAgICAgICAvXigoWytdMzF8MDAzMSlcXHNcXCgwXFwpKFswLTldezl9KXwoWytdMzF8MDAzMSlcXHMwKFswLTldezl9KXwwKFswLTldezl9KSkkLyxcclxuICAgICAgICAgICAgL14oKCgoMDAzMSl8KFxcKzMxKSkoXFwtKT82KFxcLSk/WzAtOV17OH0pfCgwNihcXC0pP1swLTldezh9KXwoKCgwMDMxKXwoXFwrMzEpKShcXC0pP1sxLTldezF9KChbMC05XShcXC0pP1swLTldezd9KXwoWzAtOV17Mn0oXFwtKT9bMC05XXs2fSkpKXwoWzBdezF9WzEtOV17MX0oKFswLTldKFxcLSk/WzAtOV17N30pfChbMC05XXsyfShcXC0pP1swLTldezZ9KSkpKSQvaVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICB2YXIgZXJyID0gJyc7XHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgIGVyciA9ICdEaXQgdmVsZCBtb2V0IGVlbiBnZWxkaWcgRS1NYWlsIGFkcmVzIHppam4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0ZWwnOlxyXG4gICAgICAgICAgICBlcnIgPSAnRGl0IHZlbGQgbW9ldCBlZW4gZ2VsZGlnIHRlbGVmb29ubnVtbWVyIHppam4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdwb3MnOlxyXG4gICAgICAgICAgICBlcnIgPSAnRGl0IHZlbGQgbW9ldCBlZW4gZ2VsZGlnIHBvc3Rjb2RlIHppam4nO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHZhciBpbnB0ZXh0ID0gJCgnIycgKyBuYW1lICsgJ1RCJykudmFsKCk7XHJcbiAgICB2YXIgdmFsID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdFtuYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0ZXN0W25hbWVdW2ldLnRlc3QoaW5wdGV4dCkpIHtcclxuICAgICAgICAgICAgdmFsID0gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICAgICQoJyMnICsgbmFtZSArICctZmEnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2MtaW5wdXRfX2NoZWNrLS1ub29rJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdjLWlucHV0X19jaGVjay0tb2snKTtcclxuICAgICAgICBpZiAoZXJtb2RlID09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcCgkKCcjJyArIG5hbWUgKyAnVEInKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjJyArIG5hbWUgKyAnLWZhJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdjLWlucHV0X19jaGVjay0tbm9vaycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYy1pbnB1dF9fY2hlY2stLW9rJyk7XHJcbiAgICAgICAgaWYgKGVybW9kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXAoJCgnIycgKyBuYW1lICsgJ1RCJyksIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1vZGUgPT0gMSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbWJpKExpY2Vuc2VwbGF0ZSkge1xyXG4gICAgdmFyIGZpcnN0MmNoYXJzID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZygwLCAyKTtcclxuICAgIGZpcnN0MmNoYXJzID0gZmlyc3QyY2hhcnMubGVuZ3RoID09PSAyICYmIGZpcnN0MmNoYXJzLm1hdGNoKC9bYS16XS9pKTtcclxuICAgIHZhciBsYXN0Y2hhciA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoTGljZW5zZXBsYXRlLmxlbmd0aCwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpO1xyXG4gICAgbGFzdGNoYXIgPSBsYXN0Y2hhci5sZW5ndGggPT09IDEgJiYgbGFzdGNoYXIubWF0Y2goL1thLXpdL2kpO1xyXG4gICAgaWYgKGZpcnN0MmNoYXJzICYmIGxhc3RjaGFyKSB7XHJcbiAgICAgICAgdmFyIG5ld3N0ciA9XHJcbiAgICAgICAgICAgIExpY2Vuc2VwbGF0ZS5zbGljZSgwLCAyKSArXHJcbiAgICAgICAgICAgICctJyArXHJcbiAgICAgICAgICAgIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSkgK1xyXG4gICAgICAgICAgICAnLScgK1xyXG4gICAgICAgICAgICBMaWNlbnNlcGxhdGUuc2xpY2UoTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEsIExpY2Vuc2VwbGF0ZS5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZmlyc3QyY2hhcnMgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgICAgIGZpcnN0MmNoYXJzID0gZmlyc3QyY2hhcnMubGVuZ3RoID09PSAyICYmIGZpcnN0MmNoYXJzLm1hdGNoKC9bMC05XS9pKTtcclxuICAgICAgICB2YXIgbGFzdGNoYXIgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKExpY2Vuc2VwbGF0ZS5sZW5ndGgsIExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxKTtcclxuICAgICAgICBsYXN0Y2hhciA9IGxhc3RjaGFyLmxlbmd0aCA9PT0gMSAmJiBsYXN0Y2hhci5tYXRjaCgvWzAtOV0vaSk7XHJcbiAgICAgICAgaWYgKGZpcnN0MmNoYXJzICYmIGxhc3RjaGFyKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdzdHIgPVxyXG4gICAgICAgICAgICAgICAgTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICtcclxuICAgICAgICAgICAgICAgICctJyArXHJcbiAgICAgICAgICAgICAgICBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpICtcclxuICAgICAgICAgICAgICAgICctJyArXHJcbiAgICAgICAgICAgICAgICBMaWNlbnNlcGxhdGUuc2xpY2UoTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEsIExpY2Vuc2VwbGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdzdHIgPVxyXG4gICAgICAgICAgICAgICAgTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICtcclxuICAgICAgICAgICAgICAgICctJyArXHJcbiAgICAgICAgICAgICAgICBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgNCkgK1xyXG4gICAgICAgICAgICAgICAgJy0nICtcclxuICAgICAgICAgICAgICAgIExpY2Vuc2VwbGF0ZS5zbGljZSg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0VG9vbHRpcChlbGVtLCBzdHIpIHtcclxuICAgICQoZWxlbSlcclxuICAgICAgICAuYWRkQ2xhc3MoJ2lucHV0ZXJyb3InKVxyXG4gICAgICAgIC5hZGRDbGFzcygnZXJydG9vbHRpcCcpXHJcbiAgICAgICAgLmF0dHIoJ3RpdGxlJywgc3RyKVxyXG4gICAgICAgIC5hdHRyKCdkYXRhLXBsYWNlbWVudCcsICdyaWdodCcpXHJcbiAgICAgICAgLnRvb2x0aXAoJ2ZpeFRpdGxlJylcclxuICAgICAgICAudG9vbHRpcCgnc2hvdycpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVRvb2x0aXAoZWxlbSkge1xyXG4gICAgJChlbGVtKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcygnaW5wdXRlcnJvcicpXHJcbiAgICAgICAgLnRvb2x0aXAoJ2Rlc3Ryb3knKTtcclxufVxyXG4iLCJ2YXIgY2hlY2sgPSBbXTtcclxudmFyIGxhc3RTY3JvbGx0b3AgPSAwO1xyXG4kKCcuZmlsZS1jYXB0aW9uLW5hbWUnKS5hdHRyKCdwbGFjZWhvbGRlcicsICdWb2VnIGFmYmVlbGRpbmdlbiB0b2UuLi4nKTtcclxuJCgnI2VtYWlsVEInKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNoZWNrSW5wdXQoJ2VtYWlsJyk7XHJcbn0pO1xyXG4kKCcjcG9zVEInKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNoZWNrSW5wdXQoJ3BvcycpO1xyXG59KTtcclxuJCgnI3RlbFRCJykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICBjaGVja0lucHV0KCd0ZWwnKTtcclxufSk7XHJcbi8vIENvbnRyb2xzIHRoZSBuYXZpZ2F0aW9uXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTsgLy8gaW5pdGlhbGl6ZXMgYm9vdHN0cmFwIHRvb2x0aXBzXHJcbiAgICBjaGVja0lucHV0KCdlbWFpbCcpO1xyXG4gICAgY2hlY2tJbnB1dCgncG9zJyk7XHJcbiAgICBjaGVja0lucHV0KCd0ZWwnKTtcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcbiAgICB2YXIgZGlkU2Nyb2xsO1xyXG4gICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgdmFyIGRlbHRhID0gNTtcclxuICAgIHZhciBuYXZiYXJIZWlnaHQgPSAkKCcubmF2YmFyJykub3V0ZXJIZWlnaHQoKTtcclxuICAgIC8vIG9uIHNjcm9sbCwgbGV0IHRoZSBpbnRlcnZhbCBmdW5jdGlvbiBrbm93IHRoZSB1c2VyIGhhcyBzY3JvbGxlZFxyXG4gICAgJCgnYm9keScpLnNjcm9sbChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGRpZFNjcm9sbCA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIC8vIHJ1biBoYXNTY3JvbGxlZCgpIGFuZCByZXNldCBkaWRTY3JvbGwgc3RhdHVzXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoZGlkU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGhhc1Njcm9sbGVkKCk7XHJcbiAgICAgICAgICAgIGRpZFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDMwMCk7XHJcbiAgICBmdW5jdGlvbiBoYXNTY3JvbGxlZCgpIHtcclxuICAgICAgICB2YXIgbm93U2Nyb2xsVG9wID0gJCgnYm9keScpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhub3dTY3JvbGxUb3AgLSBsYXN0U2Nyb2xsVG9wKSA8PSBkZWx0YSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChub3dTY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wICYmIG5vd1Njcm9sbFRvcCA+IG5hdmJhckhlaWdodCAqIDMuNSkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbmF2LWRvd24nKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCduYXYtdXAnKTtcclxuICAgICAgICAgICAgLy8gJCgnLm5hdmJhcicpLmNzcygndG9wJywgJy0zMDBweCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ25hdi11cCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ25hdi1kb3duJyk7XHJcbiAgICAgICAgICAgIC8vICQoJy5uYXZiYXInKS5jc3MoJ3RvcCcsICcwcHgnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gbm93U2Nyb2xsVG9wO1xyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
