{{-- mobile header test --}}
<div class="l-mobile-nav">
    <button class="l-mobile-nav__button js-click-this" onclick="expandMobileNav();" type="button">
        <i class="l-mobile-nav__icon fa fa-bars" aria-hidden="true"></i>
    </button>
    <ul class="l-mobile-nav__list l-mobile-nav__list--hidden ">
        <li class="l-mobile-nav__list-item"><a class="l-mobile-nav__link" href="{{ url('/') }}">Home</a></li>
        <hr>
        <li class="l-mobile-nav__list-item"><a class="l-mobile-nav__link" href="{{ url('/') }}">Auto verkoop</a></li>
        <hr>
        <li class="l-mobile-nav__list-item"><a class="l-mobile-nav__link" href="{{ url('/') }}">Modellen</a></li>
        <hr>
        <li class="l-mobile-nav__list-item"><a class="l-mobile-nav__link" href="{{ url('/') }}">Over ons</a></li>
        <hr>
        <li class="l-mobile-nav__list-item"><a class="l-mobile-nav__link" href="{{ url('/') }}">Contact</a></li>
        <hr>
        <li class="btn-group"><button type="button" aria-expanded="false" data-toggle="dropdown" aria-haspopup="true"><span class="caret"></span></button>
            <ul class="dropdown-menu">
                <li><a class="l-mobile-nav__link" href="{{ url('/') }}">Contact</a></li>
                <li><a class="l-mobile-nav__link" href="{{ url('/') }}">Contact</a></li>
                <li><a class="l-mobile-nav__link" href="{{ url('/') }}">Contact</a></li>
            </ul>
        </li>
    </ul>
</div>
<nav class="l-desktop-nav">
    {{-- <div class="container-fluid"> --}}
        <div class="l-desktop-nav__brand-container">
            <a class="l-desktop-nav__brand-link" href="#"><img class="l-desktop-nav__brand-img" alt="Logo" src="{{ asset('img/logo-WEB.png') }}"></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="l-desktop-nav__links-container">
            <ul class="l-desktop-nav__list">
                <li><a class="l-desktop-nav__link" href="{{ url('/') }}">Home</a></li>
                <li><a class="l-desktop-nav__link" href="{{ url('/') }}">Auto verkoop</a></li>
                <li><a class="l-desktop-nav__link" href="{{ url('/') }}">Modellen</a></li>
                <li><a class="l-desktop-nav__link" href="{{ url('/') }}">Over ons</a></li>
                <li><a class="l-desktop-nav__link" href="{{ url('/') }}">Contact</a></li>
                <li class="btn-group">
                    <button type="button" class="l-desktop-nav__link l-desktop-nav__link--dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu l-desktop-nav__dropdown-menu">
                        @if (Auth::check())
                            <li><a class="l-desktop-nav__link" href="{{ url('/logout') }}">Uitloggen</a></li>
                        @else
                            <li><a class="l-desktop-nav__link" href="{{ url('/login') }}">Login</a></li>
                        @endif

                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    {{-- </div><!-- /.container-fluid --> --}}
</nav>
