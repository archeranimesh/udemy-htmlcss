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


## Reference ##
* [MDN | CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* [YouTube | LevelUp ](https://www.youtube.com/user/LevelUpTuts/playlists)
* [Before and After pseudo elements explained - part one: how they work ](https://www.youtube.com/watch?v=zGiirUiWslI)
* [CSS Before and After pseudo elements explained - part two: the content property ](https://www.youtube.com/watch?v=xoRbkm8XgfQ)
* [CSS Before and After pseudo elements explained - part three: as design elements](https://www.youtube.com/watch?v=djbtPnNmc0I&t=52s)
* [CSS-Tricks | box-shadow ](https://css-tricks.com/almanac/properties/b/box-shadow/)
* [MDN | box-shadow ](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

