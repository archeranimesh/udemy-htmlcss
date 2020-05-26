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


## CSS Grid | Columns | Rows##
* We can make a columns layout very easily with `display:grid`.
* `grid-template-columns` : This property divides the space into columns
    - `grid-template-columns: 200px 200px 200px;` : Splits the columns in to 3 of `200`px width.
    - `grid-template-columns: 200px auto 200px;` : Providing auto to center columns will make it occupy the complete space.
    - `grid-template-columns: auto auto auto;` : Auto with to all the 3 column.
    - `grid-template-columns: repeat(3, auto);` : Short Cut to provide above.
    - `grid-template-columns: 1fr 2fr 1fr;` : fraction values to tell how much big the columns would be in fraction.
* `grid-gap: 1rem;` : distance between grids.
* We can also make Rows layout just like we can make columns layout.
* `grid-template-rows` : This property just like the columns property divides the vertical space into rows.
    - `grid-template-rows: 1fr 2fr 3fr` : makes the first 3 items in the grid of these dimensions, remaining will be of older dimensions.
    - `grid-auto-rows: 3fr` : the dimensions of the remaining rows.
* We can use the `grid-template-columns` with `grid-template-rows` to create a horizontal and vertical layouts.
* `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` : Lot of things are happening in this 1 line.
    - `minmax(300px, 1fr)` : the function makes sure the width of the columns is 300px at least, and then grows till 1fr, when we increase the window size.
    - `auto-fit` : always fits the content to the full width of the browser.

## CSS Grid | Span ##
* With both `grid-template-columns` & `grid-template-rows` we can controls the expansion in rows and columns.
* `grid-column` : This is a short hand for these 2 column properties
    - `grid-column-start` : The position where the element should begin, using this we can change the visual representation completely.
    - `grid-column-end` : The position where the element should end, counted by the lines, and not block
    - `grid-column: 1/4;` : the above two property can be combined in this manner.
    - `grid-column: 1/span 3;` : we can give a span value, which means how many blocks, generally n - 1 line.
* `grid-row` : This also a short hand for the below 2 row properties
    - `grid-row-start` : The position where the element should begin.
    - `grid-row-end` : The position were the element should end, counted by line.
    - `grid-row: 1 / 2` : Combines the above 2 property together.
    - `grid-row: 1 / span 2` : Provides the span value.

## CSS Grid | Grid Area ##
* Grid area is a shorthand for
    - ` grid-row-start`
    - `grid-column-start`
    - `grid-row-end`
    - `grid-column-end`
* `grid-template-areas` : It provides name grid areas
    - A row is create by every separate string listed.
    - A column is created by every cell in the string.

```css
.container{
            display: grid;
            grid-template-areas: 
            'header header header'
            'content content sidebar'
            'box-1 box-2 box-3'
            'footer footer footer';
            grid-gap: 1rem;
        }

.content{
            grid-area: content;
        }
```

* As shown above `grid-template-areas` provides a string of columns in each row. like `content` is present in 2nd row for 2 columns.
* `content` is denoted as a `grid-area ` as show above, now this class will be expanded to 2 columns.

* We can use media queries to make the content responsive, mainly by using the `grid-template-areas`, and reduce to appropriate columns.
* The above code can be made responsive for mobile by doing this.

```css
@media(max-width: 500px){
            .container{
                grid-template-areas: 
                'header'
                'content'
                'sidebar'
                'box-1' 
                'box-2' 
                'box-3'
                'footer';
            }
        }
```
* As you can understand we are changing the areas to single column for mobile, and we can change it to 2 columns for iPad etc.

## Reference ##
* [ A Complete Guide to Grid ](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [CSS Grid Layout Crash Course ](https://www.youtube.com/watch?v=jV8B24rSN5o)
* [WesBos | CSS GRID: Using minmax() for Responsive Grids — 13 of 25](https://www.youtube.com/watch?v=PuhObGdKSDs)
* [Grid by Example | Introducing minmax()](https://gridbyexample.com/video/series-minmax/)
* [WesBos | CSSGrid.io](https://cssgrid.io/)
* [MDN| grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
* [Easily Structure your Layout with CSS Grid's 'grid-template-areas'](https://www.youtube.com/watch?v=qTGbWfEEnKI)
