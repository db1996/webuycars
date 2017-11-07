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

var check = [];
function startDropzone()
{
    if($('ul#filelist div').length >= 1){
        $('#svg-rol').css('display', 'block')
        var emailvalid = checkInput('email', 1);
        var posvalid = checkInput('pos', 1);
        var telvalid = checkInput('tel', 1);
        if (emailvalid && posvalid && telvalid)
        {
            $('#start-upload').click();
        }
        else{
            $('#gotostap2').click();
        }
    }
    else{
        $('.flash-image-mes').removeClass('animateOut');
        $('.flash-image-mes').addClass('animateIn');
    }
}

var uploader = new plupload.Uploader({
    browse_button: 'browse', // this can be an id of a DOM element or the DOM element itself
    url: $('#browse').attr('data-url'),
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    filters: {
        mime_types : [
            { title : "Image files", extensions : "jpg,gif,png" }
        ],
        max_file_size: "6mb",
        prevent_duplicates: true
    },
    multipart_params : {
        'kenteken' : $('#kenteken').html()
    },
    init: {
        FileUploaded: function(up, file, info) {
            // Called when a file has finished uploading
            var total = up.total;
            var response = $.parseJSON('[' + info.response + ']');
            var result = $.parseJSON(response[0].result);
            var id = result.id
            check.push(id)
            //When the queue is done
            if (total['queued'] == 0){
                var joined = check.join();
                $('#images').val(joined);
                $('#all-form').submit();
            }
        }
    }
});
uploader.init();
uploader.bind('FilesAdded', function(up, files) {
    $.each(files, function(i, file) {
        $('#filelist').append(
            '<div id="' + file.id + '">' +
            '<p>' + file.name + ' (' + plupload.formatSize(file.size) + ')'+
            '<span id="pid' + file.id + '"> </span>' +
            '</p>' +
            '<a href="" class="remove remove-upload btn error">'+
            '<i class="fa fa-times" aria-hidden="true"></i>'+
            '</a>'+
            '</div>'
        );
        $('#uploadfiles').css('display', 'initial');
        $('#filelist').append('<br/>');

        $('#' + file.id + ' a.remove').first().click(function(e) {
            e.preventDefault();
            up.removeFile(file);
            $('#' + file.id).next("br").remove();
            $('#' + file.id).remove();
            if (up.files.length == 0) {
                $('#uploadfiles').css('display', 'none');
            }
        });
    });
});
uploader.bind('UploadProgress', function(up, file) {
    $('#pid' + file.id).html(' ' + file.percent + "%");
});
uploader.bind('Error', function(up, err) {
    console.log(err.code);
    if (err.code === -600){
        $('#app').append(
            "<div class='flash-ms alert alert-danger' role='alert'>Het bestand mag maximaal 6MB zijn!</div>"
        );
        console.log("Het bestand mag maximaal 6MB groot zijn!")
    }
    else if (err.code === -601){
        $('#app').append(
            "<div class='flash-ms alert alert-danger' role='alert'>Het mogen alleen afbeeldingsbestanden zijn!</div>"
        );
        console.log("Het mogen alleen afbeeldingsbestanden zijn!")
    }
    else{
        $('#app').append(
            "<div class='flash-ms alert alert-danger' role='alert'>Het mogen alleen afbeeldingsbestanden zijn!</div>"
        );
        console.log("Het mogen alleen afbeeldingsbestanden zijn!")
    }
});
document.getElementById('start-upload').onclick = function() {
    uploader.start();
};
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
