# Section 05 | Into To Responsive Layout #

## What is Responsive Design ##

* Using HTML/CSS to make a website adapt to various screen sizes is called responsive design.
* Different design for making website responsive.
    - Set the view-port / scale.
    - Use fluid widths as oppose to fixed.
    - Media queries - Different CSS styling for different screen sizes.
    - REM units over px.
    - Mobile First method.

## Media Types ##
* These are the different media type
    - `all` - Suitable for all devices
    - `print` - Intended for print preview mode
    - `screen` - Primary for screen
    - `speech` - Speech Synthesizers

## Media Query ##
* We can target various different screen based on the `max-width` and `min-width` media query.
* The different screens are
    - Smart phones
    - Tablet
    - Normal
    - WideScreen
    - LandScape
* The sample media query looks like this.
    - `@media(min-width: 1201px)` : which means if the min-width is 1201, apply this CSS
* The media query for different screen type are as follows.
    - Smart Phones
        + `@media only screen and (max-width:500px)`
            * Smart phones are generally having max-width of 500 pixel.
    - Tablet
        + `@media(min-width: 501px) and (max-width:768px)`
            * Tablet can be target from `501px` to `768px`
    - Normal
        + `@media(min-width: 769px) and (max-width:1200px)`
            * Normal Screen ranges from `768px` to `1200px`
    - WideScreen
        + `@media(min-width: 1201px)`
            * Above `1201px` we can consider as wide screen
    - LandScape
        + `@media(max-height: 500px)`
            * If height at max is `500px`, we can consider as landscape mode, but due to width the corresponding CSS also will be applicable.
* We can also add different CSS files based on media query
    - `<link rel="stylesheet" media="screen and (max-width:768px)" href="mobile.css">`

## EM and REM Units ##

* EM
    - `em` units are font-size relative to its direct or nearest parents.
    - It causes issues if you have nested `ul` and `li`, then the size will vary.
    - `em` is good to control a certain section of the HTML page.
* REM
    - `rem` units are font-size relative to the root elements (`html`) font-size.
    - It has a universal effect on the complete web page and if more responsive.
    - `html` font size by default is `16px`

## Vh and Vw ##

* The `body` does not take up all the 100% of the height.
* `vh` and `vw` is used to slice the complete view port into horizontal and vertical slice of equal dimensions.
* `vh`
    - This is for the height
    - The value of `vh` is calculated based on the current view port size.
    - If a browser is resized it uses the re-size value.
* When we scroll we next the content immediately.

## Reference ##
* [Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/)
* [Unsplash Source](https://source.unsplash.com/)
* [Fun with Viewport Units ](https://css-tricks.com/fun-viewport-units/)
  


