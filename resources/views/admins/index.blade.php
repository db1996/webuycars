@extends('layouts.admin')

@section('content')
    <div class='row'>
        <div class='col-md-12'>
            <div class="c-box c-box--border-blue">
                <div class="c-box__header c-box__header--border">
                    <h3 class="c-box__title --no-margin">Auto dealers</h3>
                </div> <!-- /.c-box__header -->
                <div class="c-box__body js-users">
                    <div class="user-info user-info--header-row">
                        <div class="user-info__naam">Naam</div>
                        <div class="user-info__email">E-Mail</div>
                        <div class="user-info__bevestigd">Bevestigd</div>
                        <div class="user-info__edit">Aanpassen</div>
                    </div>
                    @foreach($autodealers as $autodealer)
                        <div class="user-info user-info--is-view">
                            <div class="user-info__naam">
                                <span class="--user-edit">
                                    <input id="e-{{$autodealer->id}}_naam-tb" type="text" value="{{$autodealer->name }}">
                                </span>
                                <span class="--user-view">{{$autodealer->name }}</span>
                            </div>
                            <div class="user-info__email">
                                <span class="--user-edit">
                                    <input type="email" id="e-{{$autodealer->id}}_email-tb" value="{{$autodealer->email }}">
                                </span>
                                <span class="--user-view">{{$autodealer->email }}</span>
                            </div>
                            <div class="user-info__bevestigd">{{($autodealer->confirmed == 0) ? "Mail verstuurd" : "Ja"}}</div>
                            <div class="user-info__edit">
                                <i class="fa fa-pencil-square-o user-info__icon js-user-view-edit --user-view" aria-hidden="true"></i>
                                <i class="fa fa-floppy-o user-info__icon js-user-view-view --user-edit" id="e-{{$autodealer->id}}" aria-hidden="true"></i>
                                <div class="loading-dots2 loading-dots2--nomarg --user-load">
                                    <div class="loading-dots2__dot"></div>
                                    <div class="loading-dots2__dot"></div>
                                    <div class="loading-dots2__dot"></div>
                                </div>
                            </div>
                            <div class="user-info__error" id="e-{{$autodealer->id}}_error">

                            </div>
                        </div>
                    @endforeach
                </div> <!-- /.c-box__body-->
                <div class="c-box__footer">
                    <i class="fa fa-plus-circle js-add-user-admin  user-info__icon --user-view" aria-hidden="true"></i>

                </div> <!-- /.c-box__Footer-->
            </div>  <!-- /.c-box -->
        </div><!-- /.col -->

    </div><!-- /.row -->
@endsection
