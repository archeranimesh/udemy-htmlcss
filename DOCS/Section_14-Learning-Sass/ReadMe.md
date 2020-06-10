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

## Nesting & Structuring ##
* SASS offers to nest CSS values.
* As shown below, the `h1` nested inside `header`, and the CSS works like `header h1`, it will not impact other `h1`.
* SASS allows to have the HTML structure inside CSS.
* `&` is used when we want to replace the name of the parent in a variable, as shown in the `.section`.
* We can also use `&` for pseudo class.

```sass
header{
    background: $dark-color;
    color: $light-color;
    padding: 1rem;
    // nesting
    h1{
        text-align: center;
    }
}

.section{
    &-a{
            background: $primary-color;
            color: #fff;
    }
}
```

## Inheritance ##
* We can put common CSS properties into a SASS variable, and then extend it where we need this common properties.

```sass
%btn-shared{
    display: inline-block;
    padding: 0.7rem 2rem;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-top: 1rem;
}

// using the above sharing
.btn{
    &-light {
        @extend %btn-shared;
        background-color: $light-color;
        color: #333;
    }
    &-dark{
        @extend %btn-shared;
        background-color: $dark-color;
        color: #fff;
    }
}
```
* Shared properties are starts with `%` and property name.
* The shared properties are utilized using `@extend` and property name.
* Sharing reduces efforts just like OOPs, and thus helps in structuring the CSS in much better way.

## Functions, Mixins  ##
* Like functions in programming language, we have function in SASS to reuse piece of code which behaves differently according to input.

```sass
// Set Text Color
@function set-text-color($color){
    @if (lightness($color) > 50) {
        @return #000
    } @else {
        @return #fff
    }
}
```
* Multiple keywords are used in the above code.
    - `@function` : defines the function
    - `@if` : start of the conditions.
    - `lightness` : is a in-built function.
    - `@return` : returns the value back

```sass
@import 'functions';
color: set-text-color($dark-color);
```
* the function is `@import`ed to the file which is used.
* we called the function using `set-text-color` and passing the `$dark-color` as an argument.
