# Section 02 | CSS Basics #

In this section we will be learning about:-
* Implementing CSS
* Using Selectors
* Fonts, Color, etc
* Backgrounds & Borders
* Box Model / Margin and Padding
* Floating and Alignment.
* Display Property
* Link and Button Styling
* Creating Menus
* Positioning
* Form Styling
* Dev Tools

## CSS Basic ##
* CSS is required to make the web page beautiful. HTML is structure, CSS is Style.
* CSS can be added to an HTML Document in 3 ways.
    - In-line CSS : We can add CSS property directly to HTML elements. This is not a preferred way to include CSS.
        + `<h1 style="color : red;">`
    - Internal CSS : We can add CSS within the `<style>` elements in the HTML file. We can grab the element to style.

````css
<style>
    /* Internal CSS */
    h2{
        color:green
    }
</style>
````

    - External CSS : We can add an external file, named `style.css` and then include this file within the HTML by using `<link>` element.
        + `<link rel="stylesheet" href="css/style.css">`
        + This is the most preferred way to include CSS into HTML.

## Basic CSS Selector ##
* There are multiple ways to target element in HTML for styling.
* **Element Selector** : The most basic is an element selector.
    - The below is an example of element selector.

````css
body{
    color : white;
}
````

* **Class Selector** : We can assign common styling applicable to a common group called class.
    - We can apply the class to multiple HTML element to style them in same manner.
    - `.` is used in CSS to identify a class.

````html
<h2 class="primary-heading">Welcome</h2>
````


````css
.primary-heading{
        color: green;
    }
```` 

* **ID Selector** : We can assign an ID to a specify element to style it uniquely.
    - We should have only 1 ID per HTML page.
    - `#` is used in CSS to identify a ID.

````html
<div id="welcome">
```` 

````css
#welcome{
        background-color: #f4f4f4;
    }
````

* **Multiple Selector** : We can assign same CSS property to multiple class.
    - `,` is used to specify multiple class, sharing same CSS property

````html
<div id="welcome"></div>
<div id="about"></div>
````


````css
#welcome, #about{
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 5px;
    }
````

* **Nested Selector** : We can also specifically target a particular element in the HTML hierarchy.
    - ` ` is used to specify nesting.

````html
<div id="welcome">
    <p> HELLO </p>
</div>
````

````css
#welcome p{
        font-size: 20px;
    }
````


## CSS Fonts ##

* **Web Safe Fonts** : When using different `font-family` in CSS, we have to take care that the font should be available in all the system.
    - `font-family` : `Arial, Helvetica, sans-serif;` this means that `Arial` will be selected, if not present `Helvetica` will be selected, at last any `sans-serif` font will be selected.
* **Downloaded Fonts** : There is also option to use Internet fonts like google fonts, adobe fonts.
    * `<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> `
        * The above will link to a `Roboto` font from google fonts and it is free.
* Measurement Unit:-
    * Absolute:-
        *  `cm` : centimeters
        *  `mm` : millimeters
        *  `in` : inches
        *  `px` : pixel, this is what is most commonly used.
        *  `pt` : point
        *  `pc` : picas
    +  Relative:-
        *  `%` : Relative to parent element.
        *  `em` : Relative to the font size of the element.
        *  `rem` : Relative to the font size of the root element.
        *  `vw` : 1% of the viewport width
        *  `vh` : 1% of the viewport height.
-  `font-size` : based on the above measurement units.
-  `font-height` : how tall will be the font
-  `font-weight` : `bold`, `italic`

## CSS Colors ##

* There are multiple ways to specify color in CSS.
    - Color Names : We can specify the color names like `red`, `white`.
    - RGB values : We can specify the rgb values with `rgb(red, green, yellow)`
        + the value have a range of 0 - 255 for each red, green and yellow values.
    - HEX Values :  We can also specify the rgb value using HEX value like `#dddddd`
        + The Six values are divided into, first 2 values for Red, next 2 for green, and last 2 Blue.
        + We can also specify only 3 values. 