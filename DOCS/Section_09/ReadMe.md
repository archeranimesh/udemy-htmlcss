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

