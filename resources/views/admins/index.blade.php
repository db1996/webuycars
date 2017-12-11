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
                    <form class="" action="index.html" method="post">
                        <div class="user-info user-info--is-view">
                            <div class="user-info__naam">
                                <span class="--user-edit"><input type="text" value="John Doe"></span>
                                <span class="--user-view">John Doe</span>
                            </div>
                            <div class="user-info__email">
                                <span class="--user-edit"><input type="email" value="johndoe@example.com"></span>
                                <span class="--user-view">johndoe@example.com</span>
                            </div>
                            <div class="user-info__bevestigd">Ja</div>
                            <div class="user-info__edit">
                                <i class="fa fa-pencil-square-o user-info__icon js-user-view-edit --user-view" aria-hidden="true"></i>
                                <i class="fa fa-floppy-o user-info__icon js-user-view-view --user-edit" aria-hidden="true"></i>
                            </div>
                        </div>
                    </form>
                </div> <!-- /.c-box__body-->
                <div class="c-box__footer">
                    <i class="fa fa-plus-circle js-add-user-admin  user-info__icon --user-view" aria-hidden="true"></i>

                </div> <!-- /.c-box__Footer-->
            </div>  <!-- /.c-box -->
        </div><!-- /.col -->

    </div><!-- /.row -->
@endsection
