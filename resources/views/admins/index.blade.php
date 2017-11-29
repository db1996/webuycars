@extends('layouts.admin')

@section('content')
    <div class='row'>
        <div class='col-md-12'>
            <div class="c-box c-box--border-blue">
                <div class="c-box__header c-box__header--border">
                    <h3 class="c-box__title --no-margin">Auto dealers</h3>
                </div> <!-- /.c-box__header -->
                <div class="c-box__body">
                    @foreach($autodealers as $autodealer)
                        <h5>
                            {{ $autodealer->name }}
                        </h5>

                        <div class="c-userinfo">
                            aslkdjasdlkjdsalksadjaslkj
                        </div>
                    @endforeach
                </div> <!-- /.c-box__body-->
                <div class="c-box__footer">
                    <form action='#'>
                        <input type='text' placeholder='New task' class='form-control input-sm' />
                    </form>
                </div> <!-- /.c-box__Footer-->
            </div>  <!-- /.c-box -->
        </div><!-- /.col -->

    </div><!-- /.row -->
@endsection
