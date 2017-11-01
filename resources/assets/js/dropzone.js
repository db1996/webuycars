function startDropzone()
{
    $('#start-upload').click();
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
uploader.bind('FileUploaded', function(upldr, file, object) {
    console.log(object.response);
    console.log(file);
    console.log(upldr);
    var myData;
    try {
        myData = eval(object.response);
        console.log(myData.result);
    } catch(err) {
        console.log('nope');
    }
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
});
document.getElementById('start-upload').onclick = function() {
    uploader.start();
};
