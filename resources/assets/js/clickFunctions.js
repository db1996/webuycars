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
                if ($(this).val() == '') {
                    errors.push($(this).attr('name'));
                    if ($(this).hasClass('currencyinput')) {
                        $(this)
                            .parent()
                            .addClass('inputerror')
                            .attr('title', 'Dit veld is verplicht')
                            .tooltip('fixTitle')
                            .tooltip('show');
                    } else {
                        $(this)
                            .addClass('inputerror')
                            .addClass('errtooltip')
                            .attr('title', 'Dit veld is verplicht')
                            .attr('data-placement', 'right')
                            .tooltip('fixTitle')
                            .tooltip('show');
                    }
                    // if the val is NOT empty it removes the tooltip
                } else {
                    $(this)
                        .removeClass('inputerror')
                        .tooltip('destroy');
                }
                // If the type is number it also checks if the text in it is a number (pointless if console dev changed type)
                if (type == 'number') {
                    var elem = $(this);
                    if ($(this).hasClass('currencyinput')) {
                        elem = $(this).parent();
                    }
                    if (!isnum) {
                        errors.push($(this).attr('name'));
                        $(elem)
                            .addClass('inputerror')
                            .attr('title', 'Dit veld moet een getal hebben')
                            .tooltip('fixTitle')
                            .tooltip('show');
                    } else {
                        $(elem)
                            .removeClass('inputerror')
                            .tooltip('destroy');
                    }
                }
                // Some special bullshit if the type is radio
            } else {
                var thisName = $(this).attr('name');
                if (!$("input:radio[name='" + thisName + "']").is(':checked')) {
                    errors.push($(this).attr('name'));
                    $(this)
                        .parent()
                        .parent()
                        .addClass('inputerror')
                        .addClass('errtooltip')
                        .attr('title', 'Dit veld is verplicht')
                        .attr('data-placement', 'right')
                        .tooltip('fixTitle')
                        .tooltip('show');
                } else {
                    $(this)
                        .parent()
                        .parent()
                        .removeClass('inputerror')
                        .tooltip('destroy');
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
    }
    if (!errors.length) {
        $(this).attr('data-toggle', 'tab');
        $(this).click();
    } else {
        console.log(errors);
    }
});
