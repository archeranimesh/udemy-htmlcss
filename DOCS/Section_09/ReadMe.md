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

