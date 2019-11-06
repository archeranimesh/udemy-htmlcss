# Section 04 | Hotel Website #

## Design & Ideas ##

* We should look at some themes website for inspiration of design, like [BootStrap Themes](https://themes.getbootstrap.com/)


## File Structure  ##
* CSS file is generally named as `style.css` or `main.css`
* Different thought are present to add both Navbar and showcase area to `<header>` tag or only the navbar.
* We should never have multiple id on the same page, though we can have class.
* The logo should always take us to the `index.html`
* We should add a CSS reset at the beginning with both margin and padding to be 0.
    * We can also have `box-sizing` defined as `border-box`
* Links should be assigned color specifically.
* There should be container inside navbar, so that the navbar does not extend till the end.

### Horizontal Centering ###
* We can horizontally center an item with this parameters.

## Showcase ##
* Always add a container around the content and inside a bigger container to restrict the expansion of the content.

````css
.hori-center{
    max-width:400px;
    margin: auto;
}
````

* `section` tags can be used to separate different part of the website.


## Font Awesome ##
* Font Awesome is a great icon website, where we can get free icons.
* We can add the Font Awesome as a link tag.
* Font Awesome has pre-built CSS class.
* `fa-hotel` : provides a hotel icon
* `fa-utensils` : provides a utensils icon
* `fa-dumbbell` : provides a dumbbell icon
* `fa-3x` : expands the size of the icon as 3x.

## Footer ##
* We can have multiple footer in a document.
* We should remove the `float` effect by having a `clear:both` just after floated div.


## About Page ##
* CSS class should have a definite styling. Do not club different type of styling into one.
* We can add `opacity` to make the `div` a little see through, value range is from
    - `0` : fully transparent
    - `1` : opaque.


## Reference ##
* [The best free stock photos & videos shared by talented creators.](https://www.pexels.com/)
* [FontAwesome](https://fontawesome.com/)
* [Build anything ](https://themes.getbootstrap.com/)
* [The CSS Value of Auto ](https://www.youtube.com/watch?v=1vl3LrEwqpE)