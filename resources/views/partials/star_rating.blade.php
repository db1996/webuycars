<div class="stars">
    <input {{(old($name) == 5 ?  'checked' :  '')}} value='5' class="star starinp star-5" id="star-5{{$name}}" type="radio" name="{{$name}}"/>
    <label class="star star-5" for="star-5{{$name}}"></label>
    <input {{(old($name) == 4 ? 'checked' : '')}} value='4' class="star starinp star-4" id="star-4{{$name}}" type="radio" name="{{$name}}"/>
    <label class="star star-4" for="star-4{{$name}}"></label>
    <input {{(old($name) == 3 ? 'checked' : '')}} value='3' class="star starinp star-3" id="star-3{{$name}}" type="radio" name="{{$name}}"/>
    <label class="star star-3" for="star-3{{$name}}"></label>
    <input {{(old($name) == 2 ? 'checked' : '')}} value='2' class="star starinp star-2" id="star-2{{$name}}" type="radio" name="{{$name}}"/>
    <label class="star star-2" for="star-2{{$name}}"></label>
    <input {{(old($name) == 1 ? 'checked' : '')}} value='1' class="star starinp star-1" id="star-1{{$name}}" type="radio" name="{{$name}}"/>
    <label class="star star-1" for="star-1{{$name}}"></label>
</div>
