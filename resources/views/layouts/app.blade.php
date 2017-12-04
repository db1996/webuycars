<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="ltr">
<head>
    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <title>{{ config('app.name', 'WeBuyCars') }}</title>
    <meta name="description" content="Description of the page less than 150 characters">

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/img/favicon/nmap2')}}/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/img/favicon/nmap2')}}/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/img/favicon/nmap2')}}/favicon-16x16.png">
    <link rel="manifest" href="{{asset('/img/favicon/nmap2')}}/manifest.json">
    <link rel="mask-icon" href="{{asset('/img/favicon/nmap2')}}/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="{{asset('/img/favicon/nmap2')}}/favicon.ico">
    <meta name="msapplication-config" content="{{asset('/img/favicon/nmap2')}}/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> <!-- bootstrap -->
    <!-- Fileinput -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.5/css/fileinput.min.css" media="all" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"> <!-- Custom CSS -->

    <!-- scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> <!-- JQuery -->
    <script src="{{asset('js/nl.js')}}"></script> <!-- Language script for fileinput-->
    <script src="https://use.fontawesome.com/ad9e1c6f38.js"></script> <!-- Font Awesome -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> <!-- Bootstrap -->
    <!-- Filinput scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.5/js/plugins/sortable.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.5/js/plugins/purify.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.5/js/fileinput.min.js"></script>
    <script src="{{ asset('js/hammer.js') }}"></script> <!-- Hammer (touch) -->
</head>
<body id="@yield('pagetype', "standard")">
    @include('partials.preloader')
    <div id="app">
        @include('partials.flashmessage')
        @include('partials.nav')
        @yield('content')
        @include('partials.makemeload')
    </div>

    <!-- Custom JS -->
    <script src="{{ asset('js/main.js') }}"></script>
</body>
</html>
