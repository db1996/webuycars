var url = "http://localhost:3000/webuycars/public/";
// $('#ga-terug').click(function(){
//     $('.flash-image-mes').removeClass('animateIn');
//     $('.flash-image-mes').addClass('animateOut');
// });

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
    parent_tab_pane.find('input[type="text"],input[type="email"],input[type="number"]').each(function () {
        if ($(this).val() == "") {
            errors.push($(this).attr('name') + " HAS AN ERROR");
            $(this).addClass('inputerror')
                   .attr('title', 'Dit veld is verplicht')
                   .tooltip('fixTitle')
                   .tooltip('show');
        } else {
            $(this).removeClass('inputerror')
                   .tooltip('destroy');
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
