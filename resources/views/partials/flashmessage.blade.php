@if (session('messageImp'))
    <div class="outer">
        <div class="inner alert alert-{{session('kindOfMesImp')}} c-flash-message" role="alert">
            <i class="c-flash-message__cross fa fa-times js-close-flash" aria-hidden="true"></i>
            {{ session('messageImp') }}
        </div>
    </div>
@else
    @if (session('flashmessage'))
        <div class="alert alert-{{session('kindOfMes')}} c-flash-message" role="alert">
            <i class="c-flash-message__cross fa fa-times js-close-flash" aria-hidden="true"></i>
            {{ session('flashmessage') }}
        </div>
    @endif
@endif
