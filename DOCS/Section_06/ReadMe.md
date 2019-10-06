# Section 06 | Intro To FlexBox #

## Introduction ##
* BootStrap had grid which was used to align element.
* CSS3 came with flexbox to help in alignment of elements.
* `flex` is a `display` property, just like our `display : block`
* Aligns item both horizontally and vertically.

![An illustration of the various directions and sizing terms as applied to a row flex container.](img/flex-direction-terms.svg "Logo")

The different alignment options are

* `justify-content` : Align along the main axis (horizontal)
* `align-items` : Align items along the cross axis (Vertical)
* `align-content` : Align when extra space in cross axis (Vertical)


## Flex Basics ##
* `display: flex;`
    - Sets the child horizontally aligned, not occupying the whole width.
* `flex-direction: row;`
    - Default alignment direction is `row`, i.e. horizontal.
* `flex-direction: column;`
    - This is to vertically align the direction of items.
* `flex-direction: row-reverse;`
    - This is to horizontal reverse alignment.
* `flex-wrap: wrap;`
    - When we have more than 12 item on a row, the horizontal scroll bar is enabled.
    - To remove the scroll bar, and bring item to next row.
* `flex-flow: row wrap; `
    - We can remove this property if we provide the `flex-flow`
        + `flex-direction`
        + `flex-wrap`
* `flex: 1;`
    - Gives equal with to all the particular item.
* `.item:first-child`
    - Targets the first element in the list of div having `.item` class.

## Reference ##
* [Flexbox - The Ultimate CSS Flex Cheatsheet (with animated diagrams!)](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/)
* [Image Source ](https://www.w3.org/TR/css-flexbox-1/)
