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


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbWJpKExpY2Vuc2VwbGF0ZSl7XHJcbiAgICB2YXIgZmlyc3QyY2hhcnMgPSBMaWNlbnNlcGxhdGUuc3Vic3RyaW5nKDAsIDIpO1xyXG4gICAgZmlyc3QyY2hhcnMgPSBmaXJzdDJjaGFycy5sZW5ndGggPT09IDIgJiYgZmlyc3QyY2hhcnMubWF0Y2goL1thLXpdL2kpO1xyXG4gICAgdmFyIGxhc3RjaGFyID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZyhMaWNlbnNlcGxhdGUubGVuZ3RoLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSk7XHJcbiAgICBsYXN0Y2hhciA9IGxhc3RjaGFyLmxlbmd0aCA9PT0gMSAmJiBsYXN0Y2hhci5tYXRjaCgvW2Etel0vaSk7XHJcbiAgICBpZiAoZmlyc3QyY2hhcnMgJiYgbGFzdGNoYXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld3N0ciA9IExpY2Vuc2VwbGF0ZS5zbGljZSgwLCAyKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKDIsIExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxKSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKExpY2Vuc2VwbGF0ZS5sZW5ndGggLSAxLCBMaWNlbnNlcGxhdGUubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdmFyIGZpcnN0MmNoYXJzID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZygwLCAyKTtcclxuICAgICAgICBmaXJzdDJjaGFycyA9IGZpcnN0MmNoYXJzLmxlbmd0aCA9PT0gMiAmJiBmaXJzdDJjaGFycy5tYXRjaCgvWzAtOV0vaSk7XHJcbiAgICAgICAgdmFyIGxhc3RjaGFyID0gTGljZW5zZXBsYXRlLnN1YnN0cmluZyhMaWNlbnNlcGxhdGUubGVuZ3RoLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbGFzdGNoYXIgPSBsYXN0Y2hhci5sZW5ndGggPT09IDEgJiYgbGFzdGNoYXIubWF0Y2goL1swLTldL2kpO1xyXG4gICAgICAgIGlmIChmaXJzdDJjaGFycyAmJiBsYXN0Y2hhcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBuZXdzdHIgPSBMaWNlbnNlcGxhdGUuc2xpY2UoMCwgMikgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCBMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSkgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZShMaWNlbnNlcGxhdGUubGVuZ3RoIC0gMSwgTGljZW5zZXBsYXRlLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBuZXdzdHIgPSBMaWNlbnNlcGxhdGUuc2xpY2UoMCwgMikgKyBcIi1cIiArIExpY2Vuc2VwbGF0ZS5zbGljZSgyLCA0KSArIFwiLVwiICsgTGljZW5zZXBsYXRlLnNsaWNlKDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5WdWUuY29tcG9uZW50KCdleGFtcGxlJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGUudnVlJykpO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
