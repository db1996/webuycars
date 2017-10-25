<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <i class="glyphicon glyphicon-menu-hamburger"></i>
      </button>
      <a class="navbar-brand" href="#"><img alt="Brand" src="{{ asset('img/logo-WEB.png') }}"></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="{{ url('/') }}">Home</a></li>
        <li><a href="{{ url('/') }}">Auto verkoop</a></li>
        <li><a href="{{ url('/') }}">Modellen</a></li>
        <li><a href="{{ url('/') }}">Over ons</a></li>
        <li><a href="{{ url('/') }}">Contact</a></li>
        <li><a href="#" onclick="blaaah();">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
