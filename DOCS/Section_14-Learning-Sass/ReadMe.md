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

## Setup Node-SASS ##

* Install Node.
* `npm --version`
    - Check if `npm` is installed.
* `npm init -y`
    - Creates the default `package.json` file.
* `npm install node-sass`
    - install `node-sass` as dependency.
* Script to watch a folder and generate a CSS file.

```json
"scripts": {
    "sass": "node-sass -w scss/ -o dist/css/ --recursive"
}
```

* `-w` : watches the `scss` folder.
* `-o` : outputs to this folder, i.e compiled CSS.

