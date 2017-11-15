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

function checkInput(name, mode = 0){
    var test = {
        email: [
             /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        ],
        pos: [
            /^[1-9]{1}[0-9]{3} ?[A-Z]{2}$/i,
        ],
        tel: [
            /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031|31)[1-9][0-9][-]?[1-9][0-9]{6}))$/, /^(((\\+31|0|0031|031|31)6){1}[1-9]{1}[0-9]{7})$/i,
            /^(([+]31|0031)\s\(0\)([0-9]{9})|([+]31|0031)\s0([0-9]{9})|0([0-9]{9}))$/,
            /^((((0031)|(\+31))(\-)?6(\-)?[0-9]{8})|(06(\-)?[0-9]{8})|(((0031)|(\+31))(\-)?[1-9]{1}(([0-9](\-)?[0-9]{7})|([0-9]{2}(\-)?[0-9]{6})))|([0]{1}[1-9]{1}(([0-9](\-)?[0-9]{7})|([0-9]{2}(\-)?[0-9]{6}))))$/i
        ]
    };

    var inptext = $('#'+name+'TB').val();
    var val = 0;
    for (var i = 0; i < test[name].length; i++) {
        if (test[name][i].test(inptext)){
            val = 1;
            break;
        }
    }
    if (val){
        $('#'+name+'-fa').removeClass('checks-nook').addClass('checks-ok')
    }
    else
    {
        $('#'+name+'-fa').addClass('checks-nook').removeClass('checks-ok')
    }
    if (mode == 1){
        return val;
    }
}

function combi(Licenseplate){
    var first2chars = Licenseplate.substring(0, 2);
    first2chars = first2chars.length === 2 && first2chars.match(/[a-z]/i);
    var lastchar = Licenseplate.substring(Licenseplate.length, Licenseplate.length - 1);
    lastchar = lastchar.length === 1 && lastchar.match(/[a-z]/i);
    if (first2chars && lastchar)
    {
        var newstr = Licenseplate.slice(0, 2) + "-" + Licenseplate.slice(2, Licenseplate.length - 1) + "-" + Licenseplate.slice(Licenseplate.length - 1, Licenseplate.length);
    }
    else{
        var first2chars = Licenseplate.substring(0, 2);
        first2chars = first2chars.length === 2 && first2chars.match(/[0-9]/i);
        var lastchar = Licenseplate.substring(Licenseplate.length, Licenseplate.length - 1);
        lastchar = lastchar.length === 1 && lastchar.match(/[0-9]/i);
        if (first2chars && lastchar)
        {
            var newstr = Licenseplate.slice(0, 2) + "-" + Licenseplate.slice(2, Licenseplate.length - 1) + "-" + Licenseplate.slice(Licenseplate.length - 1, Licenseplate.length);
        }
        else{
            var newstr = Licenseplate.slice(0, 2) + "-" + Licenseplate.slice(2, 4) + "-" + Licenseplate.slice(4);
        }
    }
}

var check = [];
var lastScrolltop = 0;
$('.file-caption-name').attr('placeholder', 'Voeg afbeeldingen toe...');
$(document).ready(function(){
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
$(document).ready(function(){
     $('[data-toggle="tooltip"]').tooltip();
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();
    // on scroll, let the interval function know the user has scrolled
    $('body').scroll(function(event){
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
        if (Math.abs(nowScrollTop - lastScrollTop) <= delta)
            return;
        if (nowScrollTop > lastScrollTop && nowScrollTop > navbarHeight){
            $('.navbar').removeClass('nav-down').addClass('nav-up');
            // $('.navbar').css('top', '-300px')
        } else {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
            // $('.navbar').css('top', '0px')
        }
        lastScrollTop = nowScrollTop;
    }
});
