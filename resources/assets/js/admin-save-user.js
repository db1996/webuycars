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
            if (typeof obj.edited === 'undefined') {
                $('#' + elemid + '_naam-tb').attr('id', 'e-' + obj.id + '_naam-tb');
                $('#' + elemid + '_email-tb').attr('id', 'e-' + obj.id + '_email-tb');
                $(elem).attr('id', 'e-' + obj.id);
                console.log('created');
            } else {
                console.log('edited');
            }
            $(elem)
                .parent()
                .parent()
                .removeClass('user-info--is-load')
                .addClass('user-info--is-success');
            setTimeout(function() {
                $(elem)
                    .parent()
                    .parent()
                    .removeClass('user-info--is-success');
            }, 3000);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
            $(elem)
                .parent()
                .parent()
                .removeClass('user-info--is-load')
                .removeClass('user-info--is-view')
                .addClass('user-info--is-error')
                .addClass('user-info--is-edit');
            setTimeout(function() {
                $(elem)
                    .parent()
                    .parent()
                    .removeClass('user-info--is-error');
            }, 3000);
        }
    });
}
