{{-- Mobile navbar, only hamburger --}}
<nav class="navbar navbar-mobile navbar-fixed-top">
    <div class="container-fluid container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header navbar-header-mobile">
            <button type="button" class="navbar-toggle navbar-toggle-mobile collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-collapse-mobile" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-nav-mobile">
                <li><a class="navbar-link-mobile" href="{{ url('/') }}">Home</a></li>
                <li><a class="navbar-link-mobile" href="{{ url('/') }}">Auto verkoop</a></li>
                <li><a class="navbar-link-mobile" href="{{ url('/') }}">Modellen</a></li>
                <li><a class="navbar-link-mobile" href="{{ url('/') }}">Over ons</a></li>
                <li><a class="navbar-link-mobile" href="{{ url('/') }}">Contact</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header navbar-header-default">
            <button type="button" class="navbar-toggle navbar-toggle-default collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <a class="navbar-brand" href="#"><img class="brand-img" alt="Brand" src="{{ asset('img/logo-WEB.png') }}"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-collapse-default" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-nav-default">
                <li><a class="navbar-link-default" href="{{ url('/') }}">Home</a></li>
                <li><a class="navbar-link-default" href="{{ url('/') }}">Auto verkoop</a></li>
                <li><a class="navbar-link-default" href="{{ url('/') }}">Modellen</a></li>
                <li><a class="navbar-link-default" href="{{ url('/') }}">Over ons</a></li>
                <li><a class="navbar-link-default" href="{{ url('/') }}">Contact</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
