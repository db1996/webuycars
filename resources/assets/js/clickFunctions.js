var url = "http://localhost:3000/webuycars/public/";
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
$('.delete-old-img').click(function(){
    var val = $(this).attr('value');
    var imagesVal = $('#images').val();
    $('.overlay-wrap' + val).addClass("animateIn");
    // if (imagesVal == val){
    //     imagesVal = "";
    // }
    // else{
    //     if (imagesVal.indexOf(val) == 0){
    //         imagesVal = imagesVal.replace(val + ",", "");
    //     }
    //     else{
    //         imagesVal = imagesVal.replace("," + val, "");
    //     }
    // }
    // $("#" + val).remove();
    // $('#images').val(imagesVal);
});
$('.no-delete-img').click(function(){
    var val = $(this).attr('value');
    $('.overlay-wrap' + val).removeClass("animateIn");
});
$('.delete-img').click(function(){
    var val = $(this).attr('value');
    var imagesVal = $('#images').val();
    if (imagesVal == val){
        imagesVal = "";
    }
    else{
        if (imagesVal.indexOf(val) == 0){
            imagesVal = imagesVal.replace(val + ",", "");
        }
        else{
            imagesVal = imagesVal.replace("," + val, "");
        }
    }
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    $.ajax({
        type: "POST",
        url: url + 'image/' + val,
        data: {
            id: val
        },
        success: function (data) {
            console.log(data);
            var returnData = $.parseJSON(data);
            console.log(returnData);
            $("#" + val).remove();
            $('#images').val(imagesVal);
        },
        error: function (data) {
            console.log('Error:', data);
        }
    });
});
