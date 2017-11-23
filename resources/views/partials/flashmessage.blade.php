@if (session('messageImp'))
    <div class="alert alert-{{session('kindOfMesImp')}} c-flash-message" role="alert">
        {{ session('messageImp') }}
    </div>
@else
    @if (session('flashmessage'))
        <div class="alert alert-{{session('kindOfMes')}} c-flash-message" role="alert">
            {{ session('flashmessage') }}
        </div>
    @endif
@endif
