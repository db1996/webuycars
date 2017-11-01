@php
if (isset($data)) {
    //dd($data);
}
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://use.fontawesome.com/ad9e1c6f38.js"></script>
    <title>{{ config('app.name', 'WeBuyCars') }}</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://rawgit.com/enyo/dropzone/master/dist/dropzone.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body id="@yield('pagetype')">
    <div id="app">
        @include('partials.nav')
        @yield('content')
    </div>
    <!-- Scripts -->
    <script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    </script>
    @include('partials.flashmessage')

    <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
    <script src="https://rawgit.com/enyo/dropzone/master/dist/dropzone.js"></script>
    <script type="text/javascript">

    Dropzone.options.dropzoneStep3 = {
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 5, // MB
        init: function()
        {
            this.on("complete", function(file) {
                if (file.size > 5*1024*1024) {
                    $("#app").append("<div id='flash-mes' class='flash-ms alert alert-danger' role='alert'>Het bestand kan maximaal 5MB zijn</div>")
                    return false;
                }
                if(!file.type.match('image.*')) {
                    this.removeFile(file);
                    alert('Not an image')
                    return false;
                }
            });
        },

    };
    </script>

</body>
</html>
