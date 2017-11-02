<?php function create_star_rating($name){ ?>
    <div class="stars">
        <form action="">
            <input class="star star-5" id="star-5{{$name}}" type="radio" name="{{$name}}"/>
            <label class="star star-5" for="star-5{{$name}}"></label>
            <input class="star star-4" id="star-4{{$name}}" type="radio" name="{{$name}}"/>
            <label class="star star-4" for="star-4{{$name}}"></label>
            <input class="star star-3" id="star-3{{$name}}" type="radio" name="{{$name}}"/>
            <label class="star star-3" for="star-3{{$name}}"></label>
            <input class="star star-2" id="star-2{{$name}}" type="radio" name="{{$name}}"/>
            <label class="star star-2" for="star-2{{$name}}"></label>
            <input class="star star-1" id="star-1{{$name}}" type="radio" name="{{$name}}"/>
            <label class="star star-1" for="star-1{{$name}}"></label>
        </form>
    </div>

<?php }?>