log.md

# 2018-6-1
## bug:
`-webkit-`(Safari) and `position: relative` conflicts, especially when using `percentage unit (eg. 50%)`  It seems to be a inherit problem since 10 years ago.

## skill:
embed svg: `<img>< scr="..">`
mask using svg: `-webkit-mask: url("...") no-repeat center; mask: url("...") no-repeat center;` here `url` does not have to be website link.
css variant: https://www.w3schools.com/css/css3_variables.asp
```css
/* define */
:root {
        --main-txt-color: white;    
}

/* use */
div {
    color: var(--main-txt-color);
}
```

# 2018-6-2

##Solution to make whole `<div>` clickable (hyperlink):

Discussion: https://stackoverflow.com/questions/796087/make-a-div-into-a-link

Solution 1: Javascript **bad semantics**

```html
<div onclick="location.href='http://www.example.com';" style="cursor:pointer;"></div>
```

Solution 2: make `<a>` fill the whole  `<div>` 

```Html
/*HTML*/
<div class="feature">
       <a href="http://www.example.com"></a>
</div>
```

```css
/* CSS */
div.feature {
        position: relative;
    }

    div.feature a {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-decoration: none; /* No underlines on the link */
        z-index: 10; /* Places the link above everything else in the div */
        background-color: #FFF; /* Fix to make div clickable in IE */
        opacity: 0; /* Fix to make div clickable in IE */
        filter: alpha(opacity=1); /* Fix to make div clickable in IE */
    }
```

Solution 3: `<a>` contains `<div>`  **since HTML5**

However, it seems that the `<a>`  tag can not maintain the div class and style (?)

```html
<article>
<a href="story1.html">
<h3>Bruce Lawson voted sexiest man on Earth</h3>
<p><img src="bruce.jpg" alt="gorgeous lovebundle. ">A congress representing all the planet's women unanimously voted Bruce Lawson as sexiest man alive.</p>
<p>Read more</p>
</a>
</article>
```

Solution 4: make `<a>` behaves like  `<div>` 

```html
<style>
a {
    display: block;
}
</style>

<a class="" style="">

</a>
```

**Note** now the `<a>` is most out block. For example, when in a grid,  `<a>` replace  `<div>`  so it may required extra style to it.



Both works:

```html
<a href="www.google.com">
    <div class="cell" style="background-color:aqua;">
        <div class="cell-icon" id="portfolio"></div>
        <p><!--2-->PXXXXX?</p>
    </div>
</a>
          
<a href="www.google.com" class="cell" style="background-color: #c26967">
    <div class="cell-icon" id="portfolio"></div>
    <p><!--2-->out-Portfolio?</p>
</a>
```

## miscellaneous

SVG: stroke-opacity: 1; défaut 

```
      <!--
      
<svg xmlns="http://www.w3.org/2000/svg"
     width="9.72222in" height="5.55556in" id="mySVG" viewBox="0 0 700 700">
    
    <path fill="none" stroke="black" stroke-width="50" id="triangle" d="M397.47 447.49 L489.5 164.24 L56.52 164.24 L32.06 239.49 L385.92 239.49 L318.34 447.49 L397.47 447.49 M141.41 576.03 L318.34 31.5 L397.47 31.5 L220.54 576.03 L141.41 576.03"/>
    <circle cx=0 cy=0 r=50></circle>
    <circle cx=600 cy=0 r=50></circle>
    <circle cx=0 cy=600 r=50></circle>
    <circle cx=600 cy=600 r=50></circle>
          </svg>
-->
      <object type="image/svg+xml" data="icon/logo-1-1.svg" id="namesvg">Your browser does not support SVGs</object>
      <pattern id="pattern" patternUnits="userSpaceOnUse"
             width="200" height="300" viewbox="0 0 500 500">
  <image src="icon/logo-1-1.svg" width="500" height="500" />
</pattern>
```

