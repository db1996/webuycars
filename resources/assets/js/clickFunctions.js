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

$('.js-add-user-admin').on('click', function() {
    var rand = randomString2(10, 'r-');
    var isIn = $.inArray(rand, newUsers);
    if (isIn > -1) {
        do {
            rand = randomString2(10, 'r-');
            isIn = $.inArray(rand, newUsers);
        } while (isIn > -1);
    }
    $('.js-users').append(
        '<div class="user-info user-info--is-edit" id="' + rand + '_wrap"></div>'
    );
    var strNaam = '';
    strNaam +=
        '<span class="--user-edit"><input type="text" id="' +
        rand +
        '_naam-tb" value="John Doe"></span>';
    strNaam += '<span class="--user-view">John Doe</span>';

    var strMail = '';
    strMail +=
        '<span class="--user-edit"><input type="email" id="' +
        rand +
        '_email-tb" value="johndoe@example.com"></span>';
    strMail += '<span class="--user-view">johndoe@example.com</span>';

    var strIcon = '';
    strIcon +=
        '<i class="fa fa-pencil-square-o user-info__icon js-user-view-edit --user-view" aria-hidden="true"></i>';
    strIcon +=
        '<i class="fa fa-floppy-o user-info__icon js-user-view-view --user-edit" id="' +
        rand +
        '" aria-hidden="true"></i>';
    var strLoad = '';
    strLoad += '<div class="loading-dots2 loading-dots2--nomarg --user-load">';
    strLoad += '<div class="loading-dots2__dot"></div>';
    strLoad += '<div class="loading-dots2__dot"></div>';
    strLoad += '<div class="loading-dots2__dot"></div>';
    strLoad += '<div class="loading-dots2__dot"></div>';
    strLoad += '<div class="loading-dots2__dot"></div>';
    strLoad += '</div>';
    strIcon += strLoad;

    $('#' + rand + '_wrap').append('<div class="user-info__naam" id="' + rand + '_naam"></div>');
    $('#' + rand + '_naam').append(strNaam);
    $('#' + rand + '_wrap').append('<div class="user-info__email" id="' + rand + '_email"></div>');
    $('#' + rand + '_email').append(strMail);
    $('#' + rand + '_wrap').append(
        '<div class="user-info__bevestigd" id="' + rand + '_bevestigd">nee</div>'
    );
    $('#' + rand + '_wrap').append('<div class="user-info__edit" id="' + rand + '_edit"></div>');
    $('#' + rand + '_edit').append(strIcon);
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
    $(elem)
        .parent()
        .parent()
        .removeClass('user-info--is-view')
        .addClass('user-info--is-edit');
}
function js_user_view_view(elem) {
    $(elem)
        .parent()
        .parent()
        .addClass('user-info--is-load')
        .addClass('user-info--is-view')
        .removeClass('user-info--is-edit');
    var elemid = $(elem).attr('id');
    var nameVal = $('#' + elemid + '_naam-tb').val();
    var emailVal = $('#' + elemid + '_email-tb').val();
    var token = $('meta[name="csrf-token"]').attr('content');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': token
        }
    });
    $.ajax({
        type: 'POST',
        url: url + 'admin/ajaxsave',
        data: { naam: nameVal, email: emailVal },
        success: function(msg) {
            console.log(msg);
            $(elem)
                .parent()
                .parent()
                .removeClass('user-info--is-load');
        }
    });
}
