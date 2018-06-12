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

```html
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

# 2018-06-07

Horizontal and vertical align

## Center Align Elements

To horizontally center a block element (like <div>), use `margin: auto;`

 **Note:** Center aligning has no effect if the `width` property is not set (or set to 100%).

## Center Align Text

To just center the text inside an element, use `text-align: center;`

## Center an Image

To center an image, set left and right margin to `auto` and make it into a `block` element:

`block` is important!

## Left and Right Align - Using position

One method for aligning elements is to use `position: absolute;`

**Note:** Absolute positioned elements are removed from the normal flow, and can overlap elements.

```css
.right {
    position: absolute;
    right: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

## Left and Right Align - Using float

Another method for aligning elements is to use the `float` property

```css
.right {
    float: right;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

**Note:** If an element is taller than the element containing it, and it is floated, it will overflow outside of its container. You can use the "**clearfix**" hack to fix this (see example below).

```css
.clearfix {
    overflow: auto;
}
```

## Center Vertically - Using padding

There are many ways to center an element vertically in CSS. A simple solution is to use top and bottom `padding`:



## Center Vertically - Using line-height

Another trick is to use the `line-height` property with a value that is equal to the `height` property.

```css
.center {
    line-height: 200px;
    height: 200px; /* optional? */
    border: 3px solid green;
    text-align: center;
}

/* If the text has multiple lines, add the following: */
.center p {
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
}
```

When insert a image, need to add `vertical-align: middle`

```css
#parent {
    line-height: 200px;
}
#parent img {
    vertical-align: middle;
}
```



## Center Vertically - Using position & transform

If `padding` and `line-height` are not options, a third solution is to use positioning and the `transform` property:

Note: The transform property is not supported in IE8 and earlier versions.

```css
center { 
    height: 200px;
    position: relative;	/*Make the container relatively positioned, which declares it to be a container for absolutely positioned elements.*/
    border: 3px solid green; 
}

.center p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    margin-right: -50%; 
    /* The 'margin-right: -50%' is needed to compensate the 'left: 50%'. The 'left' rule reduces the available width for the element by 50%. The renderer will thus try to make lines that are no longer than half the width of the container.  */
}
```

## using flex box

A side-effect of 'flex' is that the child element, the P in this case, is automatically made as small as possible.

```css
div.container6 {
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center }
div.container6 p {
  margin: 0 }

```

https://www.w3.org/Style/Examples/007/center.en.html#translations

## using table-cell

```css
div.container {
    min-height: 10em;
    display: table-cell;
    vertical-align: middle }
...
<div class="container">
  <P>This small paragraph...
</div>
```

## using negative margin

```css
#parent {position: relative;}
#child {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%; /* have to set the height and width, thus items is not vertical align inside of div*/
    margin: -15% 0 0 -25%;
    /* alert: the margin-top tend to use percentage of width */
}
```

## using auto margin

```css
.center {

	height: 200px;
    border: 3px solid green;
    position: relative;
    text-align: center;
}

.center p {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%; /* have to set the height and width, thus items is not vertical align inside of div*/
    height: 50%;
    margin: auto;
    border: 3px solid green;
}
```

## using empty div with negative margin-bottom 

##1

If set the `position: absolute;` then `width: 100%; height: 100%;` will fill the viewport and will NOT collapse.



# 2018-06-09

Compared to `display: inline`, the major difference is that `display: inline-block` allows to set a width and height on the element.

Also, with `display: inline-block`, the top and bottom margins/paddings are respected, but with `display: inline` they are not.

Compared to `display: block`, the major difference is that `display: inline-block` does not add a line-break after the element, so the element can sit next to other elements.

# 2018-06-10

Method to change the class in JS

```js
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.getElementById('js-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

/* css: header -> header.smaller */

```

```javascript
var nav = document.querySelector('.main-nav');
var position = 0;

// window.addEventListener('scroll', function(){
//   if(window.pageYOffset > 100) {
//     nav.classList += ' small';
//   } else {
//     nav.classList = 'main-nav';
//   }
// });

window.addEventListener('scroll', function(){
  if(position < window.pageYOffset) {
    //console.log('down')
    nav.classList += ' up';
    position = window.pageYOffset;
  } else {
    //console.log('up');
    nav.classList = 'main-nav small'
    position = window.pageYOffset;
  }
})

/* css: .main-nav small -> .main-nav small up */
```

