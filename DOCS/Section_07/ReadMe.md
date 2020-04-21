# Section 07 | EdgeLedger Website #

## Design Choice ##
* NavBar is not inside the showcase because, in this website the NavBar is sticky at the top, which cannot gel well if it is part of Showcase.
* Each section of the website should be divided into natural block, as shown below
    - `<nav>` : Have the navigation buttons for going to different pages of the website.
    - `<header>` : Big showcase image and content can be shown here.
        + `nav` is generally put inside a `header` elements, but since the `nav` bar will be static here so it has an independent section here.
    - `<section>` : different parts of the website could be placed in different section.
        + Each section can also have a `div` acting as a container, if the inner elements dimensions needs to be controlled.
    - `<footer>` : The footer section, to have the social media icons etc.

## External Dependency ##
* **Font Awesome** : Great website to provide icons for the website. Now we have to register for getting the unique id.
* **OpenLayers** : Free Map APIs, also gives sample quick start guide which helps in adding maps to the website.
* **Jquery** : We are using JQuery for animation, and using the minified version and not the slim version, as the animate APIs are not present in slim version.
* **Google Fonts** : We are using the `Roboto` Fonts from google fonts as an import in CSS
    - `@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');`

## CSS ##
* We are using different CSS file for providing responsiveness, the main CSS file is followed by devices specific CSS files for cascading effects.
* `max-width:768px` : media query used to identify mobile screens, as the maximum width for mobile screen should be `768px`.
* `min-width:1100px` : Any screen with more than `1100px` width can be considered for wide-screen.
* Few CSS reset properties.
    - `margin` and `padding` should be made `0`.
    - `box-sizing` should be made `border-box`, then only the padding and margin will be included with the width and height.
    - `text-decoration` should be `none` for `a` tags.
    - `list-style` should be `none` for links in `nav` bar.
* Few Utility CSS classes
    - Padding,
        + We should have 2 different types of padding classes, one only for y-axis, and one for all.
        + Only for y-axis:
````css
.py-1{padding: 1.5rem 0;}
.py-2{padding: 2rem 0;}
.py-3{padding: 3rem 0;}
````

* For all axis


````css
.p-1{padding: 1.5rem;}
.p-2{padding: 2rem;}
.p-3{padding: 3rem;}
````
- Background Color Classes
    - We can have `bg-light`, `bg-dark` and a `bg-primary` color scheme for our backgrounds.
    - The `bg-light` and `bg-dark` are both inverse of each other.


## Reference ##
* [OpenLayers | Quick Start](https://openlayers.org/en/latest/doc/quickstart.html)
* [Font Awesome ](https://fontawesome.com/)
* [Google Fonts | Roboto](https://fonts.google.com/specimen/Roboto?query=robo&selection.family=Roboto)


