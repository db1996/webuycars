{{-- mobile header test --}}
<div class="l-mobile-nav">
    <button class="l-mobile-nav__button js-click-this" onclick="expandMobileNav();" type="button">
        <i class="l-mobile-nav__icon fa fa-bars" aria-hidden="true"></i>
    </button>
    <ul class="l-mobile-nav__list l-mobile-nav__list--hidden ">
        <li class="l-mobile-nav__list-item">
            <a class="l-mobile-nav__link" href="{{ url('/') }}">Home</a>
        </li>
        <hr>
        <li class="l-mobile-nav__list-item">
            <a class="l-mobile-nav__link" href="{{ url('/') }}">Auto verkoop</a>
        </li>
        <hr>
        <li class="l-mobile-nav__list-item">
            <a class="l-mobile-nav__link" href="{{ url('/') }}">Modellen</a>
        </li>
        <hr>
        <li class="l-mobile-nav__list-item">
            <a class="l-mobile-nav__link" href="{{ url('/') }}">Over ons</a>
        </li>
        <hr>
        <li class="l-mobile-nav__list-item">
            <a class="l-mobile-nav__link" href="{{ url('/') }}">Contact</a>
        </li>
        <li class="l-mobile-nav__list-item">
            <a class="l-mobile-nav__link" href="{{ url('/') }}">Contact</a>
        </li>
        <hr>
    </ul>
</div>
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
                <li><div class="btn-group" role="group">
                    <button type="button" class="navbar-link-default" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="navbar-link-default" href="{{ url('/login') }}">Login</a></li>
                        <li><a class="navbar-link-default" href="{{ url('/register') }}">Registreer</a></li>
                    </ul>
                </div></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
