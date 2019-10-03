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

## Flex Alignment & Order ##
* `flex-basis` : Provides a initial main size of the flex item. Consider it to be setting the width.
* `justify-content` : Decides how a browser distributes space in and around an item in the horizontal(main-axis) direction.
    - `flex-start` - The items are packed to the beginning of the flex container (left).
    - `flex-end` - The items are packed to the end of flex container (right).
    - `center` - The items are aligned towards the center, with space all around.
    - `space-between` - The items are aligned horizontally, with all space is between items.
    - `space-around` - The items are aligned horizontally, and space is equal between items
    - `space-evenly` - The items are aligned horizontally, and space is equal for all items on each side.
* `align-items` : Decides how elements are aligned along the cross axis(Vertical)
    - `stretch` - *Default* value, Stretches to fill the container.
    - `center` - Items are centered in the cross-axis
    - `flex-start` - Items are place at the top of the cross-axis.
    - `flex-end` - Items are places at the end of the cross-axis.
    - `baseline` - Items are places such that the baseline align.
* `align-content` : It is used when there is space in the cross-axis
    - `flex-start` - Items are place at the top of the cross-axis.
    - `flex-end` - Items are places at the end of the cross-axis.
    - `center` - Items are grouped together at the center
    - `space-between` - Items has space in between.
    - `space-around` - Items also have space at the end
    - `stretch` - *Default*, stretches the content
* `align-self` : Overrides specific values from `align-items`.
    - `flex-start` : Items are placed at the top of cross-axis.
    - `flex-end` : Items are placed at the end of cross-axis.
    - `center` : Items are aligned at the center of cross-axis.
    - `baseline` : Item's baseline should be aligned.
    - `stretch` : *Default*, stretches the item.
* `order` : We can change the visual order of presentation of an items.

## Reference ##
* [Flexbox - The Ultimate CSS Flex Cheatsheet (with animated diagrams!)](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/)
* [Image Source ](https://www.w3.org/TR/css-flexbox-1/)
