# Section 11 | CSS Grid #

## Introduction ##

* CSS Grid as the name suggest, provides a Grid Layout system.
* Similar to flex box, but little complicates as we can make 2D layout.
* `align-items`, `justify-content` are supported.
* `display:grid` : creates a grid, and is set on a container just like flex box.
* All direct child are grid items.
* `grid-template-columns` : defines width and number of columns.
* We can use flex within grid, grid can handle complete web page, where as the flex can handle a layout.

### Flex Vs Grid ###
* It is not a mutually exclusive case, we can use a combination of both.
* CSS Grids can be used for outer element and Grid like Layouts.
* Flex can be used for inner element.


## CSS Grid | Columns ##
* We can make a columns layout very easily with `display:grid`.
* `grid-template-columns` : This property divides the space into columns
    - `grid-template-columns: 200px 200px 200px;` : Splits the columns in to 3 of `200`px width.
    - `grid-template-columns: 200px auto 200px;` : Providing auto to center columns will make it occupy the complete space.
    - `grid-template-columns: auto auto auto;` : Auto with to all the 3 column.
    - `grid-template-columns: repeat(3, auto);` : Short Cut to provide above.
    - `grid-template-columns: 1fr 2fr 1fr;` : fraction values to tell how much big the columns would be in fraction.
* `grid-gap: 1rem;` : distance between grids.


## Reference ##
* [ A Complete Guide to Grid ](https://css-tricks.com/snippets/css/complete-guide-grid/)
