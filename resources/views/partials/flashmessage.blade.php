@if (session('messageImp'))
    <div id="flash-mes" class="alert alert-{{session('kindOfMesImp')}}" role="alert">
        {{ session('messageImp') }}
    </div>
@else
    @if (session('flashmessage'))
        <div id="flash-mes" class="alert alert-{{session('kindOfMes')}}" role="alert">
            {{ session('flashmessage') }}
        </div>
    @endif
@endif
