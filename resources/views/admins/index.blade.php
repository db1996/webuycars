@extends('layouts.admin')

@section('content')
    <div class='row'>
        <div class='col-md-12'>
            <div class="c-box c-box--border-blue">
                <div class="c-box__header c-box__header--border">
                    <h3 class="c-box__title --no-margin">Auto dealers</h3>
                </div> <!-- /.c-box__header -->
                <div class="c-box__body js-users">
                    @foreach($autodealers as $autodealer)
                        <h5>
                            {{ $autodealer->name }}
                        </h5>
                        <div class="c-userinfo">
                            aslkdjasdlkjdsalksadjaslkj
                        </div>
                    @endforeach
                    <div class="user-info user-info--header-row">
                        <div class="user-info__naam">Naam</div>
                        <div class="user-info__email">E-Mail</div>
                        <div class="user-info__bevestigd">Bevestigd</div>
                        <div class="user-info__edit">Aanpassen</div>
                    </div>
                    <div class="user-info">
                        <div class="user-info__naam">John Doe</div>
                        <div class="user-info__email">johndoe@example.com</div>
                        <div class="user-info__bevestigd">Ja</div>
                        <div class="user-info__edit">Pas aan</div>
                    </div>
                </div> <!-- /.c-box__body-->
                <div class="c-box__footer">
                    <i class="fa fa-plus-circle js-add-user-admin" aria-hidden="true"></i>
                </div> <!-- /.c-box__Footer-->
            </div>  <!-- /.c-box -->
        </div><!-- /.col -->

    </div><!-- /.row -->
@endsection
