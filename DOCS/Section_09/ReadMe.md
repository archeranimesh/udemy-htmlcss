## Section 09 | Advanced CSS ##

## Targeted Selectors ##
* Descendant Selectors
    - `div p` : selects all the `p` tags inside a `div`, irrespective of the depth.
* Child Selectors
    - `div > p` : selects only the `p` tags which are direct child of `div`, and not all `p` tags.
* Adjacent sibling selectors
    - `div + p` : selects the paragraph immediately following a `div`, and not all sibling paragraphs.
* Attribute Selectors
    - `a[target]` : selects all `a` tags having `target` as an attribute.
        + `<a href="http://www.google.com/" target="_blank">Google</a>`
    - `a[target='_self']` : select those `a` tags which have an attribute matching `target='_self'`
        + `<a href="#" target="_self">Page 3</a>`
    - `input[type="text"]` : select a particular `input` element whose type if `text`
        + `<input type="text" placeholder="Name">`

## Pseudo classes ##
* There are specific type of selector, which selects based on state of the elements.
* For example if I have a document tree of 20 `li` elements, bellow are the ways I can select different `li` elements.
    - `li:first-child` : Selects the first `li` element in the above 20 elements.
    - `li:last-child` : Selects the last `li` elements in the above 20 elements.
    - `li:nth-child(3)` : Selects the 3rd `li` elements in the above 20 elements.
    - `li:nth-child(3n + 0)` : Selects every 3rd `li` element starting at 0 offset.
    - `li:nth-child(3n+7)` : Selects every 3rd `li` elements starting at 7th offset.
    - `li:nth-child(odd)` : Selects every odd `li` elements.
    - `li:nth-child(even)` : Selects every even `li` elements.
* There is also few special pseudo classes called `before` and `after`
    - `header:before` : Style the area just before the content of `header`, not before `header`.
        - `content:` : is a property used, which can insert content into the dom, without modifying the DOM.
            + Generally it is kept `''` empty.
    * `.is-required:after` : Same as `before`, after is used to modify the content after the content of element.


## Box Shadow ##
* `box-shadow` property adds a shadow effects around a elements frame.

````css
box-shadow: /* offset-x | offset-y | blur-radius | spread-radius | color */;
````

* The above code shows the various attribute of a box-shadow.
    - **offset-x** : depending on the value given it draws a shadow on the x-axis.
        + `+`ive value creates a shadow on the right of the element.
        + `-`ive value creates a shadow on the left of the element.
    - **offset-y** : depending on the value given it draws a shadow on the y-axis.
        + `+`ive value creates a shadow on the bottom of the element.
        + `-`ive value creates a shadow on the top of the element.
    - **blur-radius** : a value of `0` will have sharp shadow, where as a positive value will have a blur effect.
        + The blur radius is added to the x and y offset.
    - **spread-radius** : a positive value increases the size of the blur, default is 0.
    - **color** : the color of the shadow, generally it is preferred to use a value of `rgba(0,0,0,0.5)`.
    - `inset` : `inset` is one additional attribute which makes the shadow inside the element and not outside.

## Text Shadow ##
* `text-shadow` CSS property adds shadows to the text.

````css
text-shadow: /* offset-x | offset-y | blur-radius | color */;
````
* Unlike `box-shadow`, the text shadow takes only 4 parameters.
    - `offset-x`: depending on the value provided, it draws the shadow in the respective direction on x-axis
        + `+`ive value creates a shadow on the right of the element.
        + `-`ive value creates a shadow on the left of the element.
    - `offset-y`: depending on the value provided, it draws the shadow in the respective direction on y-axis
        + `+`ive value creates a shadow on the bottom of the element.
        + `-`ive value creates a shadow on the top of the element.
    - **blur-radius** : a value of `0` will have sharp shadow, where as a positive value will have a blur effect.
        + The blur radius is added to the x and y offset.
    - **color** : the color of the shadow, generally it is preferred to use a value of `rgba(0,0,0,0.5)`.

## CSS Variables ##
* Custom values can defined using CSS variables, which can then be reused in the complete style sheet.

````css
:root{
    --light-color:#f4f4f4;
}

body{
    background: var(--light-color);
}
````
* `:root` pseudo class is used to define a variable, in this case `--light-color` to be accessible to all the elements.
* A CSS Variable name starts with `--` followed by a property name, and the value.
* The CSS Variable can be reused/ accessed using `var(--variable-name)` .
* CSS Variables can also be defined at the local scope, meaning applicable only for a element or a class in place of global.
* If a CSS variable is not valid we can provide a fall back option, ex `color: var(--my-var, red);` if `--my-var` is not defined, `red` is the fall back.
* If a CSS Variable provides a invalid value, it defaults to the default value.
* CSS Variables are also accessible from Javascript.


## Key Frame Animation ##
* `@keyframes` is a way to determine the animation to be done provided a `from` steps, `to` step.

````css
@keyframes width-animate{
        from{
            top: 0;
        }
        to{
            top: 300px;
        }
    }
````
* The above animation `width-animate` will change the `top` value from `0` to `300px` with animation.

* The animation starts when we give this CSS property.

````css
/* The animation-name property is provided with the key frame animation name, width-animate */
.box{
    animation-name: width-animate;
}
````
* The various animation property which we can provide.
* `animation-duration` : Provides the duration of the animation in `2s` seconds or `2ms` milliseconds.
* `animation-iteration-count` : Number of times an animation should happen, we can even give `infinite` as an option.
* `animation-fill-mode` : The target of an animation is specified with this attributes.
    - `none` : No target fill is provided when the animation ends.
    - `forwards` : The target will retain the computed values calculated by the **last** keyframe animation.
    - `backwards` : The target will retain the computed values calculated by the **first** keyframe animation.
        + This works when the starting position is not initial position of animation.
    -`both` : This is a combination of both `backwards` and `forwards`.
* `animation-delay`: It sets after how much delay the animation should start.
* `animation-direction` : In which direction the animation should happen.
    - `normal` : this is the default option, which means forwards direction, basically starting from `from` ending in `to`.
    - `reverse` : The animation plays backwards.
    - `alternate` : The animation changes direction in each cycle.
    - `alternate-reverse` : same as `alternate`, just that the first animation starts backwards.
* `animation-timing-function` : This property sets how the animation should progress.
    - `ease` : slow in start and end, fast in between
    - `linear` : animates at even speed.
    - `ease-in` : start slow, and then catches up at the end.
    - `ease-out` : start fast and then easing at the end.
    - `ease-in-out` : Same as `ease`, only `ease-in-out` is little more linear in animation.
* There is a short cut property which can set all the above animation property in 1 place.
* `animation` : It is a shorthand of all these below animation property.
    - `animation-name`
    - `animation-duration`
    - `animation-timing-function`
    - `animation-delay`
    - `animation-iteration-count`
    - `animation-direction`
    - `animation-fill-mode`
    - `animation-play-state`

* `@keyframes` also support intermediate percentages in the animation.

```css
@keyframes animate{
25%{
    top: 0;
    left: 300px;
    background: red;
    border-radius: 50% 0 0 0;
}

```

* The above example animates from `0%` to `25%`, and similarly we can specify different percentages.

## CSS Transitions ##
* **CSS Transitions** provides a way to control animation speed while changing a CSS property.
* In place of a sudden changes in property, CSS transitions make the transition smooth.
* Not all properties can be animated, here is a list from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
* Different types of CSS Transitions properties are
    - `transition-property` : The CSS property like `background` etc on which the transition will be applied.
        + The values it takes are
            * `none` : No property will transition.
            * `all` : All property for the possible list will transition.
            * `custom_ident` : Any individual CSS property on which transition can be applied.
    - `transition-duration` : The length/time taken for the animation to complete.
    - `transition-timing-function` : How is the intermediate value is calculated.
        - `ease` : slow in start and end, fast in between
        + `linear` : animates at even speed.
        + `ease-in` : start slow, and then catches up at the end.
        + `ease-out` : start fast and then easing at the end.
        + `ease-in-out` : Same as `ease`, only `ease-in-out` is little more linear in animation.
    - `transition-delay` : Animation should start with how much delay.
* All the previous properties can be combined into 1 property.
    - `transition` : `transition: margin-right 4s ease-in-out 1s;`

## CSS Transforms ##
* CSS transforms tells us an element which is styled by CSS can be transformed int 2/3-Dimensional Space.
* CSS transforms changes the shape and position of an element without disrupting the document flow.
* Only Block level elements can be transformed.
* Using CSS Transforms with CSS transition can produce very innovative animations.
* Different CSS transform properties ares:-
    - `rotate(25deg);` : rotates the element by `25`deg.
    - `skew(25deg);` : skews the element by `25`deg.
    - `scale(2);` : Scales the element by `2`.
    - `translate(100px, 100px);` : moves the element by `x` and `y` position.
    - `translate3d(100px, 100px, 0px);` : moves the element by `x`, `y` and `z` co-ordinates.


## Reference ##
* [MDN | CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* [YouTube | LevelUp ](https://www.youtube.com/user/LevelUpTuts/playlists)
* [Before and After pseudo elements explained - part one: how they work ](https://www.youtube.com/watch?v=zGiirUiWslI)
* [CSS Before and After pseudo elements explained - part two: the content property ](https://www.youtube.com/watch?v=xoRbkm8XgfQ)
* [CSS Before and After pseudo elements explained - part three: as design elements](https://www.youtube.com/watch?v=djbtPnNmc0I&t=52s)
* [CSS-Tricks | box-shadow ](https://css-tricks.com/almanac/properties/b/box-shadow/)
* [MDN | box-shadow ](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
* [CSS Variables Tutorial (CSS Custom Properties)](https://www.youtube.com/watch?v=sQUB039MG0I)
* [CSS Variables - An introduction to CSS custom properties ](https://www.youtube.com/watch?v=PHO6TBq_auI)
* [CSS Variables - Using them in the real world and a cool trick ](https://www.youtube.com/watch?v=V9yP0QG0NWI)
* [CSS Variables - CSS vs Sass - variables inside media queries ](https://www.youtube.com/watch?v=19e7_3UmQrI)
* [CSS Variables - Browser Fallbacks ](https://www.youtube.com/watch?v=kCmL-O2T7DY)
* [CSS Variables - Sass to the rescue for fallbacks ](https://www.youtube.com/watch?v=wI80oS3KLxY)
* [CSS Variables - manipulating them with JavaScript](https://www.youtube.com/watch?v=cZ0yt67A7OM)
* [Lea Verou - CSS Variables: var(--subtitle);](https://www.youtube.com/watch?v=2an6-WVPuJU)
* [KeyFrame Animation ](https://www.smashingmagazine.com/2011/05/an-introduction-to-css3-keyframe-animations/)
* [CSS Animation Tutorial #5 - Animation Fill Mode](https://www.youtube.com/watch?v=irJXZnA3g5U)
* [Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
* [transform](https://css-tricks.com/almanac/properties/t/transform/)
* [Using CSS transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)

