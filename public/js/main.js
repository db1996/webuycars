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
// function readURL(input) {
//
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     var fullPath = document.getElementById('file').value;
//     var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
//     var filename = fullPath.substring(startIndex);
//     reader.onload = function(e) {
//       $('#blah').attr('src', e.target.result);
//     }
//     console.log(filename);
//     reader.readAsDataURL(input.files[0]);
//   }
// }
// $("#file").change(function() {
//   readURL(this);
// });


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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJhcHAuanMiLCJkcm9wem9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb21iaShMaWNlbnNlcGxhdGUpe1xyXG4gICAgdmFyIGZpcnN0MmNoYXJzID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZygwLCAyKTtcclxuICAgIGZpcnN0MmNoYXJzID0gZmlyc3QyY2hhcnMubGVuZ3RoID09PSAyICYmIGZpcnN0MmNoYXJzLm1hdGNoKC9bYS16XS9pKTtcclxuICAgIHZhciBsYXN0Y2hhciA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoTGljZW5zZXBsYXRlLmxlbmd0aCwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpO1xyXG4gICAgbGFzdGNoYXIgPSBsYXN0Y2hhci5sZW5ndGggPT09IDEgJiYgbGFzdGNoYXIubWF0Y2goL1thLXpdL2kpO1xyXG4gICAgaWYgKGZpcnN0MmNoYXJzICYmIGxhc3RjaGFyKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdzdHIgPSBMaWNlbnNlcGxhdGUuc2xpY2UoMCwgMikgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSkgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZShMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSwgTGljZW5zZXBsYXRlLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHZhciBmaXJzdDJjaGFycyA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoMCwgMik7XHJcbiAgICAgICAgZmlyc3QyY2hhcnMgPSBmaXJzdDJjaGFycy5sZW5ndGggPT09IDIgJiYgZmlyc3QyY2hhcnMubWF0Y2goL1swLTldL2kpO1xyXG4gICAgICAgIHZhciBsYXN0Y2hhciA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoTGljZW5zZXBsYXRlLmxlbmd0aCwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxhc3RjaGFyID0gbGFzdGNoYXIubGVuZ3RoID09PSAxICYmIGxhc3RjaGFyLm1hdGNoKC9bMC05XS9pKTtcclxuICAgICAgICBpZiAoZmlyc3QyY2hhcnMgJiYgbGFzdGNoYXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbmV3c3RyID0gTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEsIExpY2Vuc2VwbGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB2YXIgbmV3c3RyID0gTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgNCkgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZnVuY3Rpb24gcmVhZFVSTChpbnB1dCkge1xyXG4vL1xyXG4vLyAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4vLyAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbi8vICAgICB2YXIgZnVsbFBhdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlO1xyXG4vLyAgICAgdmFyIHN0YXJ0SW5kZXggPSAoZnVsbFBhdGguaW5kZXhPZignXFxcXCcpID49IDAgPyBmdWxsUGF0aC5sYXN0SW5kZXhPZignXFxcXCcpIDogZnVsbFBhdGgubGFzdEluZGV4T2YoJy8nKSk7XHJcbi8vICAgICB2YXIgZmlsZW5hbWUgPSBmdWxsUGF0aC5zdWJzdHJpbmcoc3RhcnRJbmRleCk7XHJcbi8vICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICAkKCcjYmxhaCcpLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBjb25zb2xlLmxvZyhmaWxlbmFtZSk7XHJcbi8vICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vICQoXCIjZmlsZVwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbi8vICAgcmVhZFVSTCh0aGlzKTtcclxuLy8gfSk7XHJcbiIsIiIsImZ1bmN0aW9uIHN0YXJ0RHJvcHpvbmUoKVxyXG57XHJcbiAgICAkKCcjc3RhcnQtdXBsb2FkJykuY2xpY2soKTtcclxufVxyXG5cclxudmFyIHVwbG9hZGVyID0gbmV3IHBsdXBsb2FkLlVwbG9hZGVyKHtcclxuICAgIGJyb3dzZV9idXR0b246ICdicm93c2UnLCAvLyB0aGlzIGNhbiBiZSBhbiBpZCBvZiBhIERPTSBlbGVtZW50IG9yIHRoZSBET00gZWxlbWVudCBpdHNlbGZcclxuICAgIHVybDogJCgnI2Jyb3dzZScpLmF0dHIoJ2RhdGEtdXJsJyksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgbWltZV90eXBlcyA6IFtcclxuICAgICAgICAgICAgeyB0aXRsZSA6IFwiSW1hZ2UgZmlsZXNcIiwgZXh0ZW5zaW9ucyA6IFwianBnLGdpZixwbmdcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBtYXhfZmlsZV9zaXplOiBcIjZtYlwiLFxyXG4gICAgICAgIHByZXZlbnRfZHVwbGljYXRlczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG11bHRpcGFydF9wYXJhbXMgOiB7XHJcbiAgICAgICAgJ2tlbnRla2VuJyA6ICQoJyNrZW50ZWtlbicpLmh0bWwoKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnVwbG9hZGVyLmluaXQoKTtcclxudXBsb2FkZXIuYmluZCgnRmlsZXNBZGRlZCcsIGZ1bmN0aW9uKHVwLCBmaWxlcykge1xyXG4gICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbihpLCBmaWxlKSB7XHJcbiAgICAgICAgJCgnI2ZpbGVsaXN0JykuYXBwZW5kKFxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIicgKyBmaWxlLmlkICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAnPHA+JyArIGZpbGUubmFtZSArICcgKCcgKyBwbHVwbG9hZC5mb3JtYXRTaXplKGZpbGUuc2l6ZSkgKyAnKScrXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gaWQ9XCJwaWQnICsgZmlsZS5pZCArICdcIj4gPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAnPC9wPicgK1xyXG4gICAgICAgICAgICAnPGEgaHJlZj1cIlwiIGNsYXNzPVwicmVtb3ZlIHJlbW92ZS11cGxvYWQgYnRuIGVycm9yXCI+JytcclxuICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicrXHJcbiAgICAgICAgICAgICAgICAnPC9hPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKCcjdXBsb2FkZmlsZXMnKS5jc3MoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xyXG4gICAgICAgICQoJyNmaWxlbGlzdCcpLmFwcGVuZCgnPGJyLz4nKTtcclxuXHJcbiAgICAgICAgJCgnIycgKyBmaWxlLmlkICsgJyBhLnJlbW92ZScpLmZpcnN0KCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHVwLnJlbW92ZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICQoJyMnICsgZmlsZS5pZCkubmV4dChcImJyXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKCcjJyArIGZpbGUuaWQpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAodXAuZmlsZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJyN1cGxvYWRmaWxlcycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxudXBsb2FkZXIuYmluZCgnVXBsb2FkUHJvZ3Jlc3MnLCBmdW5jdGlvbih1cCwgZmlsZSkge1xyXG4gICAgJCgnI3BpZCcgKyBmaWxlLmlkKS5odG1sKCcgJyArIGZpbGUucGVyY2VudCArIFwiJVwiKTtcclxufSk7XHJcbnVwbG9hZGVyLmJpbmQoJ0ZpbGVVcGxvYWRlZCcsIGZ1bmN0aW9uKHVwbGRyLCBmaWxlLCBvYmplY3QpIHtcclxuICAgIGNvbnNvbGUubG9nKG9iamVjdC5yZXNwb25zZSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgIGNvbnNvbGUubG9nKHVwbGRyKTtcclxuICAgIHZhciBteURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG15RGF0YSA9IGV2YWwob2JqZWN0LnJlc3BvbnNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhteURhdGEucmVzdWx0KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vcGUnKTtcclxuICAgIH1cclxufSk7XHJcbnVwbG9hZGVyLmJpbmQoJ0Vycm9yJywgZnVuY3Rpb24odXAsIGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLmNvZGUpO1xyXG4gICAgaWYgKGVyci5jb2RlID09PSAtNjAwKXtcclxuICAgICAgICAkKCcjYXBwJykuYXBwZW5kKFxyXG4gICAgICAgIFwiPGRpdiBjbGFzcz0nZmxhc2gtbXMgYWxlcnQgYWxlcnQtZGFuZ2VyJyByb2xlPSdhbGVydCc+SGV0IGJlc3RhbmQgbWFnIG1heGltYWFsIDZNQiB6aWpuITwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhldCBiZXN0YW5kIG1hZyBtYXhpbWFhbCA2TUIgZ3Jvb3QgemlqbiFcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGVyci5jb2RlID09PSAtNjAxKXtcclxuICAgICAgICAkKCcjYXBwJykuYXBwZW5kKFxyXG4gICAgICAgIFwiPGRpdiBjbGFzcz0nZmxhc2gtbXMgYWxlcnQgYWxlcnQtZGFuZ2VyJyByb2xlPSdhbGVydCc+SGV0IG1vZ2VuIGFsbGVlbiBhZmJlZWxkaW5nc2Jlc3RhbmRlbiB6aWpuITwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhldCBtb2dlbiBhbGxlZW4gYWZiZWVsZGluZ3NiZXN0YW5kZW4gemlqbiFcIilcclxuICAgIH1cclxufSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC11cGxvYWQnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB1cGxvYWRlci5zdGFydCgpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
