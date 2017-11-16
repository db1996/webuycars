var url = "http://localhost:3000/webuycars/public/";
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
$(".errtooltip").on("input", function() {
    $(this).removeClass('inputerror')
           .tooltip('destroy');

});
$(".starinp").on("click", function() {
    var thisName = $(this).attr('name');
    if ($("input:radio[name='" + thisName + "']").is(":checked")){
        $(this).parent().parent().removeClass('inputerror')
               .tooltip('destroy');
    }
});
$('#ga-door').click(function(){
    $('#svg-rol').css('display', 'block')
    var emailvalid = checkInput('email', 1);
    var posvalid = checkInput('pos', 1);
    var telvalid = checkInput('tel', 1);
    if (emailvalid && posvalid && telvalid)
    {
        $('#all-form').submit();
    }
    else{
        $('#gotostap2').click();
    }
});
var toggleElem;
$('.check-stap').on('click', function (){
    if ($(this).attr('data-toggle') == "tab"){
        toggleElem = this;
        setTimeout(function() {
            $(toggleElem).attr('data-toggle', '');
        }, 1);
        if ($(this).attr('type') == "submit"){
            $('#all-form').submit();
        }
        return;
    }
    var parent_tab_pane = $(this).parents('.tab-pane');
    var errors = [];
    parent_tab_pane.find('input[type="text"],input[type="email"],input[type="radio"],input[type="number"]').
    each(function () {
        var type = $(this).attr('type');
        var isnum = isNumber($(this).val());
        if (type != "radio"){
            if ($(this).val() == "") {
                errors.push($(this).attr('name'));
                if ($(this).hasClass('currencyinput')){
                    $(this).parent()
                           .addClass('inputerror')
                           .attr('title', 'Dit veld is verplicht')
                           .tooltip('fixTitle')
                           .tooltip('show');
                }
                else{
                    $(this).addClass('inputerror')
                           .addClass('errtooltip')
                           .attr('title', 'Dit veld is verplicht')
                           .attr('data-placement', 'right')
                           .tooltip('fixTitle')
                           .tooltip('show');
                }
            } else {
                $(this).removeClass('inputerror')
                       .tooltip('destroy');
            }
            if (type == "number"){

                var elem = $(this);
                if ($(this).hasClass('currencyinput')){
                    elem = $(this).parent();
                }
                if (!isnum){
                    errors.push($(this).attr('name'));
                    $(elem)
                    .addClass('inputerror')
                    .attr('title', 'Dit veld moet een getal hebben')
                    .tooltip('fixTitle')
                    .tooltip('show');
                }
                else{
                    $(elem).removeClass('inputerror')
                           .tooltip('destroy');
                }
            }
        }else{
            var thisName = $(this).attr('name');
            if (!$("input:radio[name='" + thisName + "']").is(":checked")){
                errors.push($(this).attr('name'));
                console.log($(this).parent().parent());
                $(this).parent().parent()
                       .addClass('inputerror')
                       .addClass('errtooltip')
                       .attr('title', 'Dit veld is verplicht')
                       .attr('data-placement', 'right')
                       .tooltip('fixTitle')
                       .tooltip('show');
            }
            else{
                $(this).parent().parent().removeClass('inputerror')
                       .tooltip('destroy');
            }
        }
    });

    if (!errors.length) {
        $(this).attr('data-toggle', 'tab');
        $(this).click();
    }
    else{
        console.log(errors);
    }
});
