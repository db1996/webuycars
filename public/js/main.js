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



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJhcHAuanMiLCJkcm9wem9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FDQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbWJpKExpY2Vuc2VwbGF0ZSl7XHJcbiAgICB2YXIgZmlyc3QyY2hhcnMgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgZmlyc3QyY2hhcnMgPSBmaXJzdDJjaGFycy5sZW5ndGggPT09IDIgJiYgZmlyc3QyY2hhcnMubWF0Y2goL1thLXpdL2kpO1xyXG4gICAgdmFyIGxhc3RjaGFyID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZyhMaWNlbnNlcGxhdGUubGVuZ3RoLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSk7XHJcbiAgICBsYXN0Y2hhciA9IGxhc3RjaGFyLmxlbmd0aCA9PT0gMSAmJiBsYXN0Y2hhci5tYXRjaCgvW2Etel0vaSk7XHJcbiAgICBpZiAoZmlyc3QyY2hhcnMgJiYgbGFzdGNoYXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld3N0ciA9IExpY2Vuc2VwbGF0ZS5zbGljZSgwLCAyKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKDIsIExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxLCBMaWNlbnNlcGxhdGUubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdmFyIGZpcnN0MmNoYXJzID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZygwLCAyKTtcclxuICAgICAgICBmaXJzdDJjaGFycyA9IGZpcnN0MmNoYXJzLmxlbmd0aCA9PT0gMiAmJiBmaXJzdDJjaGFycy5tYXRjaCgvWzAtOV0vaSk7XHJcbiAgICAgICAgdmFyIGxhc3RjaGFyID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZyhMaWNlbnNlcGxhdGUubGVuZ3RoLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbGFzdGNoYXIgPSBsYXN0Y2hhci5sZW5ndGggPT09IDEgJiYgbGFzdGNoYXIubWF0Y2goL1swLTldL2kpO1xyXG4gICAgICAgIGlmIChmaXJzdDJjaGFycyAmJiBsYXN0Y2hhcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBuZXdzdHIgPSBMaWNlbnNlcGxhdGUuc2xpY2UoMCwgMikgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSkgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZShMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSwgTGljZW5zZXBsYXRlLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBuZXdzdHIgPSBMaWNlbnNlcGxhdGUuc2xpY2UoMCwgMikgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCA0KSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBmdW5jdGlvbiByZWFkVVJMKGlucHV0KSB7XHJcbi8vXHJcbi8vICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbi8vICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuLy8gICAgIHZhciBmdWxsUGF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWU7XHJcbi8vICAgICB2YXIgc3RhcnRJbmRleCA9IChmdWxsUGF0aC5pbmRleE9mKCdcXFxcJykgPj0gMCA/IGZ1bGxQYXRoLmxhc3RJbmRleE9mKCdcXFxcJykgOiBmdWxsUGF0aC5sYXN0SW5kZXhPZignLycpKTtcclxuLy8gICAgIHZhciBmaWxlbmFtZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhzdGFydEluZGV4KTtcclxuLy8gICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICQoJyNibGFoJykuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtcclxuLy8gICAgIH1cclxuLy8gICAgIGNvbnNvbGUubG9nKGZpbGVuYW1lKTtcclxuLy8gICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gJChcIiNmaWxlXCIpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuLy8gICByZWFkVVJMKHRoaXMpO1xyXG4vLyB9KTtcclxuIiwiIiwiIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
