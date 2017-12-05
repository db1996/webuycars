<div class="preloader js-preloader-loaded">
    <div class="c-loading--gooey">
        <div class="c-loading__gooey-dot c-loading__gooey-dot--dot1"></div>
        <div class="c-loading__gooey-dot c-loading__gooey-dot--dot2"></div>
        <div class="c-loading__gooey-dot c-loading__gooey-dot--dot3"></div>
        {{-- <span class="c-loading__square-wave"></span>
        <span class="c-loading__square-wave"></span>
        <span class="c-loading__square-wave"></span --}}
        {{-- <span class="c-loading__wave"></span>
        <span class="c-loading__wave"></span>
        <span class="c-loading__wave"></span> --}}
    </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
        </filter>
    </defs>
</svg>
