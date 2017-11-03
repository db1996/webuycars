$('#ga-terug').click(function(){
    $('.flash-image-mes').removeClass('animateIn');
    $('.flash-image-mes').addClass('animateOut');
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

});
