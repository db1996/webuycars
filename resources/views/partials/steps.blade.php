{{-- function createsteps($numofsteps, $active, $width, $offset, $faws = 1){  --}}
<div class="row numbers-and-dashes">
    @if ($offset > 0)
        <div class="col-sm-{{ $offset }}"></div>
    @endif
    <div class="col col-xs-{{ $width }} tablenr">
        @for ($i = 0 ; $i < $numofsteps; $i += 1)
            @if ($active > $i)
                <div class="col tablenr col-xs-2">
                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                </div>
            @elseif ($active == $i)
                <div class="col tablenr col-xs-2 active">
                    <p>{{ $i + 1}}</p>
                </div>
            @else
                <div class="col tablenr col-xs-2">
                    <p>{{ $i  + 1}}</p>
                </div>
            @endif
            @if ($i < $numofsteps -1)
                <div class="col tabledash col-xs-2"></div>
            @endif
        @endfor
    </div>
</div>
