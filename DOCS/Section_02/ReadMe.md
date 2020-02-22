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

