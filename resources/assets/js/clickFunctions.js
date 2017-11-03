$('#ga-terug').click(function(){
    $('.flash-image-mes').removeClass('animateIn');
    $('.flash-image-mes').addClass('animateOut');
});

$('#ga-door').click(function(){
    $('#svg-rol').css('display', 'block')
    $('#all-form').submit();
});
