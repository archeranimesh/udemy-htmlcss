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


## Variables and Partials ##
* SASS supports variables, the variables definition starts with `$`.

```sass
$primary-color: steelblue;
$secondary-color: skyblue;
$light-color:#f4f4f4;
$dark-color:#333;
$font-stack : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

* All the above are variable definition, we can use these variables like this.

```sass
    background: $light-color;
```

* SASS also supports partials, which means we can split our SASS files into multiple files, and then combine it into a single css file.
* `_variables.scss` : the file name starts with `_` denoting that do not create a separate file.
* We can import this file in any scss file by saying `@import 'variables';`, see the missing `_` and `.scss` file extension. 
