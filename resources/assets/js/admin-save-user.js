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
// If the + symbol is clicked a new element is created
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
        '_delete-ref"   class="alert-link js-delete-yes">Ja</a>';
    htmlStr += '<a id="' + rand + '_delete-no" href="#" class="alert-link js-delete-no">Nee</a>';
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
    htmlStr += '<input type="email" id="' + rand + '_email-tb" value="' + rand + '@example.com">';
    htmlStr += '</span>';
    htmlStr += '<span class="--user-view">johndoe@example.com</span>';
    htmlStr += '</div>';
    htmlStr += '<div class="user-info__bevestigd" id="' + rand + '_bevestigd">nee</div>';
    htmlStr += '<div class="user-info__edit">';
    htmlStr +=
        '<i id="' +
        rand +
        '_edit" class="fa fa-pencil-square-o user-info__icon js-user-view-edit --user-view" aria-hidden="true"></i>';
    htmlStr +=
        '<i class="fa fa-floppy-o user-info__icon js-user-view-view --user-edit" id="' +
        rand +
        '" aria-hidden="true"></i>';
    htmlStr +=
        '<i  id="' +
        rand +
        '_delete" class="fa fa-trash-o js-user-delete user-info__icon user-info__icon--marginl --user-view"  aria-hidden="true"></i>';
    htmlStr += '<div class="loading-dots2 loading-dots2--nomarg --user-load">';
    htmlStr += '<div class="loading-dots2__dot"></div>';
    htmlStr += '<div class="loading-dots2__dot"></div>';
    htmlStr += '<div class="loading-dots2__dot"></div>';
    htmlStr += '</div>';
    htmlStr += '</div>';
    htmlStr += '<div class="user-info__error" id="' + rand + '_error"></div>';
    htmlStr += '</div>';
    $('.js-users').append(htmlStr);
    // Re initiates all the click functions that requires javascript
    $('#' + rand + '_edit').on('click', function() {
        js_user_view_edit(this);
    });
    $('#' + rand).on('click', function() {
        js_user_view_view(this);
    });
    $('#' + rand + '_delete').on('click', function() {
        js_user_delete(this);
    });
    $('#' + rand + '_delete-no').on('click', function() {
        js_user_delete_no(this);
    });
    $('#' + rand + '_delete-ref').on('click', function() {
        js_user_delete_yes(this);
    });
});

$('.js-user-view-edit').on('click', function() {
    js_user_view_edit(this);
});
$('.js-user-view-view').on('click', function() {
    js_user_view_view(this);
});

// What happens when the edit button is clicked
function js_user_view_edit(elem) {
    addOrRemoveClasses($(elem), 2, ['user-info--is-edit'], ['user-info--is-view']);
}
// When the save button is clicked
function js_user_view_view(elem) {
    addOrRemoveClasses(
        $(elem),
        2,
        ['user-info--is-load', 'user-info--is-view'],
        ['user-info--is-edit']
    );
    var elemid = $(elem).attr('id');
    var nameVal = $('#' + elemid + '_naam-tb').val();
    // gets both textbox values
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
    // Ajax to start saving the new/edited user
    $(elem)
        .parent()
        .parent()
        .attr('class', 'user-info delete-overlay user-info--is-load user-info--is-view');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': token
        }
    });
    $.ajax({
        type: 'POST',
        url: url + 'admin/ajaxsave', // The route AJAX is going to use
        data: { naam: nameVal, email: emailVal, id: elemid },
        success: function(msg) {
            // If the AJAX didn't give a weird error it gets the return json and pases it to an object
            var obj = JSON.parse(msg);
            console.log('Frist one yes');
            // IF the "err" value is in it, it means there's something wrong with the given values, such as Email exists
            if (obj.err === undefined) {
                // If the user is CREATED it changes all id's from r-randomstr to e-id
                if (typeof obj.edited === 'undefined') {
                    $('#' + elemid + '_naam-tb').attr('id', 'e-' + obj.id + '_naam-tb');
                    $('#' + elemid + '_error').attr('id', 'e-' + obj.id + '_error');
                    $('#' + elemid + '_email-tb').attr('id', 'e-' + obj.id + '_email-tb');
                    $('#' + elemid + '_bevestigd')
                        .attr('id', 'e-' + obj.id + '_bevestigd')
                        .html('Mail wordt verzonden');
                    $('#' + elemid + '_delete-ref').attr('data-id', 'e-' + obj.id);
                    $(elem).attr('id', 'e-' + obj.id);
                    // Adds a yellow overlay to show it's still in progress and sends the email
                    addOrRemoveClasses($(elem), 2, ['user-info--is-yellow']);
                    ajaxsendEmail(obj.id, elem, token); // function to do another ajax request to send the email
                } else {
                    // Adds a green overlay to show it's a success
                    addOrRemoveClasses(
                        $(elem),
                        2,
                        ['user-info--is-success'],
                        ['user-info--is-load']
                    );
                    // After 3 seconds the green overlay dissapears
                    setTimeout(function() {
                        addOrRemoveClasses($(elem), 2, [], ['user-info--is-success']);
                    }, 3000);
                }
                // If the 'err' is returned it adds a red overlay with the error message
            } else {
                addOrRemoveClasses($('#' + elemid + '_error'), 0, ['user-info__error--show']);
                $('#' + elemid + '_error').html(obj.err);
                addOrRemoveClasses(
                    $(elem),
                    2,
                    ['user-info--is-error', 'user-info--is-edit'],
                    ['user-info--is-load', 'user-info--is-view']
                );
                // After 5 seconds the red overlay dissapears
                setTimeout(function() {
                    addOrRemoveClasses($(elem), 2, [], ['user-info--is-error']);
                    addOrRemoveClasses(
                        $('#' + elemid + '_error'),
                        0,
                        [],
                        ['user-info__error--show']
                    );
                }, 5000);
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
function ajaxsendEmail(id2, elem, token) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': token
        }
    });
    $.ajax({
        type: 'POST',
        url: url + 'admin/sendcreatepass',
        data: { id: id2 },
        success: function(msg) {
            console.log('second one yes');
            var obj = JSON.parse(msg);
            if (obj.err === undefined) {
                // Adds a green overlay to show it's a success
                addOrRemoveClasses(
                    $(elem),
                    2,
                    ['user-info--is-success'],
                    ['user-info--is-yellow', 'user-info--is-load']
                );
                $('#e-' + id2 + '_bevestigd').html('Mail is verzonden');
                // After 3 seconds the green overlay dissapears
                setTimeout(function() {
                    addOrRemoveClasses($(elem), 2, [], ['user-info--is-success']);
                    $('#e-' + id2 + '_bevestigd').html('Nog geen wachtwoord');
                }, 3000);
                // If the 'err' is returned it adds a red overlay with the error message
            } else {
                addOrRemoveClasses($('#' + elemid + '_error'), 0, ['user-info__error--show']);
                $('#' + elemid + '_error').html(obj.err);
                addOrRemoveClasses(
                    $(elem),
                    2,
                    ['user-info--is-error', 'user-info--is-edit'],
                    ['user-info--is-load', 'user-info--is-view']
                );
                // After 5 seconds the red overlay dissapears
                setTimeout(function() {
                    addOrRemoveClasses($(elem), 2, [], ['user-info--is-error']);
                    addOrRemoveClasses(
                        $('#' + elemid + '_error'),
                        0,
                        [],
                        ['user-info__error--show']
                    );
                }, 5000);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
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
