<div class="c-stars">
    <input {{(old($name) == 5 ?  'checked' :  '')}} value='5' class="c-stars__input c-stars--5 star star-5" id="star-5{{$name}}" type="radio" name="{{$name}}"/>
    <label class="c-stars__label c-stars--5 star star-5" for="star-5{{$name}}"></label>
    <input {{(old($name) == 4 ? 'checked' : '')}} value='4' class="c-stars__input c-stars--4 star star-4" id="star-4{{$name}}" type="radio" name="{{$name}}"/>
    <label class="c-stars__label c-stars--4 star star-4" for="star-4{{$name}}"></label>
    <input {{(old($name) == 3 ? 'checked' : '')}} value='3' class="c-stars__input c-stars--3 star star-3" id="star-3{{$name}}" type="radio" name="{{$name}}"/>
    <label class="c-stars__label c-stars--3 star star-3" for="star-3{{$name}}"></label>
    <input {{(old($name) == 2 ? 'checked' : '')}} value='2' class="c-stars__input c-stars--2 star star-2" id="star-2{{$name}}" type="radio" name="{{$name}}"/>
    <label class="c-stars__label c-stars--2 star star-2" for="star-2{{$name}}"></label>
    <input {{(old($name) == 1 ? 'checked' : '')}} value='1' class="c-stars__input c-stars--1 star star-1" id="star-1{{$name}}" type="radio" name="{{$name}}"/>
    <label class="c-stars__label c-stars--1 star star-1" for="star-1{{$name}}"></label>
</div>
