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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb21iaShMaWNlbnNlcGxhdGUpe1xyXG4gICAgdmFyIGZpcnN0MmNoYXJzID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZygwLCAyKTtcclxuICAgIGZpcnN0MmNoYXJzID0gZmlyc3QyY2hhcnMubGVuZ3RoID09PSAyICYmIGZpcnN0MmNoYXJzLm1hdGNoKC9bYS16XS9pKTtcclxuICAgIHZhciBsYXN0Y2hhciA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoTGljZW5zZXBsYXRlLmxlbmd0aCwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpO1xyXG4gICAgbGFzdGNoYXIgPSBsYXN0Y2hhci5sZW5ndGggPT09IDEgJiYgbGFzdGNoYXIubWF0Y2goL1thLXpdL2kpO1xyXG4gICAgaWYgKGZpcnN0MmNoYXJzICYmIGxhc3RjaGFyKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdzdHIgPSBMaWNlbnNlcGxhdGUuc2xpY2UoMCwgMikgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSkgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZShMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSwgTGljZW5zZXBsYXRlLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHZhciBmaXJzdDJjaGFycyA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoMCwgMik7XHJcbiAgICAgICAgZmlyc3QyY2hhcnMgPSBmaXJzdDJjaGFycy5sZW5ndGggPT09IDIgJiYgZmlyc3QyY2hhcnMubWF0Y2goL1swLTldL2kpO1xyXG4gICAgICAgIHZhciBsYXN0Y2hhciA9IExpY2Vuc2VwbGF0ZS5zdWJzdHJpbmcoTGljZW5zZXBsYXRlLmxlbmd0aCwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxhc3RjaGFyID0gbGFzdGNoYXIubGVuZ3RoID09PSAxICYmIGxhc3RjaGFyLm1hdGNoKC9bMC05XS9pKTtcclxuICAgICAgICBpZiAoZmlyc3QyY2hhcnMgJiYgbGFzdGNoYXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbmV3c3RyID0gTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoTGljZW5zZXBsYXRlLmxlbmd0aCAtIDEsIExpY2Vuc2VwbGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB2YXIgbmV3c3RyID0gTGljZW5zZXBsYXRlLnNsaWNlKDAsIDIpICsgXCItXCIgKyBMaWNlbnNlcGxhdGUuc2xpY2UoMiwgNCkgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSg0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
