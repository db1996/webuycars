<div class="rating-wrap">
    <div class="single-inside-wrap">
        @for ($i=0; $i < $num; $i++)
            <div class="single-rating full">
                <img class="review-img" src="{{asset('img/review-face.png')}}" alt="">
            </div>
        @endfor
        @for ($i=0; $i < 5 - $num; $i++)
            <div class="single-rating"></div>
        @endfor
    </div>
</div>
