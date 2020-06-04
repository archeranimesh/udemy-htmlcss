# Section 14 | Learning SASS #

## What is SASS ##
* Sass is **Syntactically Awesome StyleSheets**.
* It's even called as CSS pre-processor.
* Enhances the functionality of CSS.
* Sass uses 2 file extensions
    - .scss
    - .sass
* The browser doesn't understand SASS, a SASS file is converted to CSS.
* SASS compiler comes in both CLI and GUI version
    - CLI - NPM based
    - GUI - Koala.
* SASS gives this extensions to normal CSS
    - Variables
    - Nesting
        + We can nest style for all elements like HTML.
    - Partials/Imports
        + We can combine different SASS file into single CSS files.
    - Function/Mixins
        + DRY could be implemented.
    - Conditionals
    - Inheritance
    - Operator & Calculation.
    - Color Functions

```sass
$color: red
$color2: blue

a
    color: $color
    &:hover
        color: $color2
```

* `.sass` works completely on indents.

```scss
$color: red;
$color2: blue;

a{
    color: $color
    &:hover {
    color: $color2
    }
        
}
```

* `.scss` works with brackets