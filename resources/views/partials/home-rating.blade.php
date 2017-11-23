<div class="c-review-faces">
    <div class="c-review-faces__wrap">
        @for ($i=0; $i < $num; $i++)
            <div class="c-review-faces__single">
                <img class="c-review-faces__img" src="{{asset('img/review-face.png')}}" alt="">
            </div>
        @endfor
        @for ($i=0; $i < 5 - $num; $i++)
            <div class="c-review-faces__single c-review-faces__single--empty"></div>
        @endfor
    </div>
</div>
