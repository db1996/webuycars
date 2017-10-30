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
function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var fullPath = document.getElementById('file').value;
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }
    console.log(filename);
    reader.readAsDataURL(input.files[0]);
  }
}
$("#file").change(function() {
  readURL(this);
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29tYmkoTGljZW5zZXBsYXRlKXtcclxuICAgIHZhciBmaXJzdDJjaGFycyA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoMCwgMik7XHJcbiAgICBmaXJzdDJjaGFycyA9IGZpcnN0MmNoYXJzLmxlbmd0aCA9PT0gMiAmJiBmaXJzdDJjaGFycy5tYXRjaCgvW2Etel0vaSk7XHJcbiAgICB2YXIgbGFzdGNoYXIgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKExpY2Vuc2VwbGF0ZS5sZW5ndGgsIExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxKTtcclxuICAgIGxhc3RjaGFyID0gbGFzdGNoYXIubGVuZ3RoID09PSAxICYmIGxhc3RjaGFyLm1hdGNoKC9bYS16XS9pKTtcclxuICAgIGlmIChmaXJzdDJjaGFycyAmJiBsYXN0Y2hhcilcclxuICAgIHtcclxuICAgICAgICB2YXIgbmV3c3RyID0gTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEsIExpY2Vuc2VwbGF0ZS5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICB2YXIgZmlyc3QyY2hhcnMgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgICAgIGZpcnN0MmNoYXJzID0gZmlyc3QyY2hhcnMubGVuZ3RoID09PSAyICYmIGZpcnN0MmNoYXJzLm1hdGNoKC9bMC05XS9pKTtcclxuICAgICAgICB2YXIgbGFzdGNoYXIgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKExpY2Vuc2VwbGF0ZS5sZW5ndGgsIExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxKTtcclxuICAgICAgICBsYXN0Y2hhciA9IGxhc3RjaGFyLmxlbmd0aCA9PT0gMSAmJiBsYXN0Y2hhci5tYXRjaCgvWzAtOV0vaSk7XHJcbiAgICAgICAgaWYgKGZpcnN0MmNoYXJzICYmIGxhc3RjaGFyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG5ld3N0ciA9IExpY2Vuc2VwbGF0ZS5zbGljZSgwLCAyKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKDIsIExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxLCBMaWNlbnNlcGxhdGUubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdmFyIG5ld3N0ciA9IExpY2Vuc2VwbGF0ZS5zbGljZSgwLCAyKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKDIsIDQpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQpIHtcclxuXHJcbiAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHZhciBmdWxsUGF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWU7XHJcbiAgICB2YXIgc3RhcnRJbmRleCA9IChmdWxsUGF0aC5pbmRleE9mKCdcXFxcJykgPj0gMCA/IGZ1bGxQYXRoLmxhc3RJbmRleE9mKCdcXFxcJykgOiBmdWxsUGF0aC5sYXN0SW5kZXhPZignLycpKTtcclxuICAgIHZhciBmaWxlbmFtZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhzdGFydEluZGV4KTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQoJyNibGFoJykuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGZpbGVuYW1lKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICB9XHJcbn1cclxuJChcIiNmaWxlXCIpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICByZWFkVVJMKHRoaXMpO1xyXG59KTtcclxuIiwiIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
