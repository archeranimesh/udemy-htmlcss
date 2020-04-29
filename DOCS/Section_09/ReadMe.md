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



## Reference ##
* [MDN | CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
