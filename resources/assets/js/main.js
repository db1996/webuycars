var check = [];
var lastScrolltop = 0;
$('.file-caption-name').attr('placeholder', 'Voeg afbeeldingen toe...');
$(document).ready(function(){
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
    }, 400);
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

    // // hide .navbar first
    // $(".navbar").show();
    // // fade in .navbar
    // $(function () {
    //     var lastScrollTop = 0, delta = 15;
    //     $('body').scroll(function(event){
    //         var st = $(this).scrollTop();
    //
    //         if(Math.abs(lastScrollTop - st) <= delta)
    //         return;
    //
    //         if (st > lastScrollTop){
    //             $('.navbar').css('top', '-300px')
    //             console.log('scroll down');
    //         } else {
    //             $('.navbar').css('top', '0px')
    //             console.log('scroll up');
    //         }
    //         lastScrollTop = st;
    //     });
    // });
});
