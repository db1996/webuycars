{{-- mobile header --}}
<div class="mobile-nav" id="js-mobile-nav">
    <button class="mobile-nav__button hamburger hamburger--arrow js-mobile-nav" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <ul class="mobile-nav__list mobile-nav__list--hidden ">
        <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/') }}">Home</a> <hr></li>
        <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/') }}">Auto verkoop</a><hr></li>
        <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/') }}">Modellen</a><hr></li>
        <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/') }}">Over ons</a><hr></li>
        <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/') }}">Contact</a><hr></li>
        @if (Auth::check())
            <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/logout') }}">Uitloggen</a></li>
        @else
            <li class="mobile-nav__list-item"><a class="mobile-nav__link" href="{{ url('/login') }}">login</a></li>
        @endif
    </ul>
</div>
<nav class="desktop-nav">
    <div class="desktop-nav__brand-container">
        <a class="desktop-nav__brand-link" href="#"><img class="desktop-nav__brand-img" alt="Logo" src="{{ asset('img/logo-WEB.png') }}"></a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="desktop-nav__links-container">
        <ul class="desktop-nav__list">
            <li><a class="desktop-nav__link" href="{{ url('/') }}">Home</a></li>
            <li><a class="desktop-nav__link" href="{{ url('/') }}">Auto verkoop</a></li>
            <li><a class="desktop-nav__link" href="{{ url('/') }}">Modellen</a></li>
            <li><a class="desktop-nav__link" href="{{ url('/') }}">Over ons</a></li>
            <li><a class="desktop-nav__link" href="{{ url('/') }}">Contact</a></li>
            <li class="btn-group">
                <button type="button" class="desktop-nav__link desktop-nav__link--dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu desktop-nav__dropdown-menu">
                    @if (Auth::check())
                        <li><a class="desktop-nav__link" href="{{ url('/logout') }}">Uitloggen</a></li>
                    @else
                        <li><a class="desktop-nav__link" href="{{ url('/login') }}">Login</a></li>
                    @endif

                </ul>
            </li>
        </ul>
    </div><!-- /.navbar-collapse -->
    {{-- </div><!-- /.container-fluid --> --}}
</nav>
