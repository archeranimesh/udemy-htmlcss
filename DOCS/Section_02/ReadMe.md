# Section 01 | HTML Basics #

In this section we will learn about
* What is HTML?
* Tags & Attributes
* Page Structure
* Meta Tags
* VS Code Live Server Setup
* Keyboard Shortcuts
* Forms and Inputs
* Links and Images
* Tables and lists
* Block vs Inline
* Div, Span, ID, Class
* HTML Entities
* HTML5 Semantic Tags

## HTML Basics ##

* HTML is made of tags.
* Tags are made of elements inside angle brackets, i.e `<html>, <p>, <h1>`
* Most tags have a opening and a closing tags i.e. `<p> and </p>`
    - These tags have some content inside the opening and closing tags
* Some tags are self closing i.e. `<br> or <br />`, `<br />` is valid in HTML and XHTML, but not used much.
    - These tags does not have any content inside them.
* If a HTML file is named as `index.html` than it becomes the home pages. The name has a very special name.

### Basic Layout ###

#### Doctype ####

````
<!DOCTYPE html>
````
* `DOCTYPE` tells the browser that this is a HTML document.
* The above is a HTML5 doctype which is very forgiving in terms of tags.

#### HTML, HEAD, BODY tags ####

````
<html>
    <head>
        <title>My Website</title>
    </head>
    <body>
        
    </body>
</html>
````

* The above is a standard layout of HTML Page.
* `<html>` wraps the complete HTML tags with itself.
* `<head>` and `<body>` are two children of the `<html>` tags, which is represented by the indentation.
* `<head>` represent all invisible item of the web page like meta information.
* `<head>` has a `<title>` tag as is children which displays the heading in the tab of browser.
    - `<title>` is very important for SEO.
    - This is what is displayed in google search results.
* `<body>` tags shows all the information inside a web page. Content of the web page.
* `<!-- This is a comment -->`, this is how we can comment in HTML page which is also multi-line

#### META tags ####
````
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="description" content="This is a website dedicate to brad travesy">
<meta name="keywords" content="web development, web design">
<!--Do no index the web page.-->
<meta name="robots" content="NOINDEX, NOFOLLOW">

````

* `meta` tags are a nice way to provide information for browser and search engines about the statistics of the web page.
* `<meta charset="UTF-8">`: The character set is defined as `UTF-8`, which is the default.
    - It helps in understanding of the browser certain type of characters represent what in a web-page.
* `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: This is important for responsive design. 
    - This gives the option of what should be the width of the viewport, which adjusts based on the device.
* `meta` tags two important `name` is used for SEO, `description` and `keywords`, `description` is displayed in the google search result.
* `<meta name="robots" content="NOINDEX, NOFOLLOW">` is used so that any search engine does not index your web page and also follow links

### Heading, Paragraph and Typography ###

* Headings
    - Headings are specified by these tags `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`.
    - This are used to specific logical structure to the document.
    - The height and width of text decreases from `<h1>` to `<h6>`.
    - There should be only 1 `<h1>` per page, generally this is the title of the page.
        + This is good for SEO
* Typography
    - `<p>` : paragraph tag is used to represent a paragraph in a HTML document.
    - `<strong>` : Strong tag is to inform that certain text has to stand out. The default styling is bold, which can be changed using CSS
    - `<em>` : The em tag is used to put emphasized on certain words in text. The default styling is italics.
        - Strong tag is used to make a sentence to stand out where as em tag is used to put a word stand out.
    - `<del>` : This is used to show certain sentence is deleted from the text.
    - `<br>` :  BR tag is used to give a line spacing between sentences. HTML documents generally ignores the whitespace while rendering.
    - `<hr>` : This is horizontal line.
    - The old few HTML tags are now deprecated because they used to represent styling in HTML, which is now given to CSS.
        - these are `<i>`, `<b>`, `<strike>`  

### Links & Images ###

* Links are reference to another documents. It can be internal and external.
    - `<a href="https://www.google.com/"> Google</a>`
        + The above is an example for `<a>` tag, which is also called anchor tag.
        + By default the above link will open in the same window. To redirect it to another window or tab we should add `target="_blank"` attributes.
        + `<a>` tags are inline elements, which will be discussed in future.
        + `<a>` tags are some time wrapped in a `<p>` tag to make it behave as a block element.
        + We can link to an internal document by just giving a relative link.
* Images are links to images, which can be both internal and external.
    - `<img src="/SRC/Section_02_HTML_Basics/images/sample.jpg" alt="My Image" width="200">`
        + `<img>` tags are also inline elements.
        + we can to internal documents just as soon above.
        + `alt` attribute is displayed when the browser cannot load the image.
    - `<img src="https://source.unsplash.com/200x200/?nature,water" alt="Nature and Water">`
        + We can link to external links just as shown above.


### List and Tables ###
* List and tables are used to represent a list of information or a structured data.
* List can be divided into 2 parts
    - Ordered list
    - Unordered List
* Unordered List : `<UL> <LI>`
    * Unordered list is used to represent a list when the data is not in order.
    * Unordered has a style attribute called `list-styles`, which can take values like `squares`, `disc` etc to show the different type of bullets.
* Ordered List : `<OL> <LI>`
    * Ordered list is used when there is an order in the data.
    * `Type` attributes help in changing the numbing for the ordered list. 
        * Options are `A`, `a`, `I`, `i`, default is `I`
* Nested List : 
    - We can also have a list within a list, which is called nested list.
* Table are a way to represent tabular data in a HTML document.
    - `<table>` : This tag indicates the beginning of the table.
    - `<thead>` : This tag indicates the header row of the table.
    - `<tbody>` : This tag represent the normal body of the table.
    - `<tr>` : This tag represents a table row.
    - `<th>` : This tag represent the individual content in a header inside a `<tr>`.
    - `<td>` : This represent the individual content in the body inside a `<tr>`


### Forms & Input ###

* HTML and CSS is used to display the form, but the processing of the form happens in the back end on server.
* Complete form is surrounded with the `form` tag.
    - `<form action="#">` : the attribute of the `action` send all the form information to the server file mentioned in `action`.
* `label` : the label tag is used to display a text as a label
* `input` : 
    - When the `for` attribute on `label` matches the `id` attribute of `input`, on clicking the label, cursor is moved to corresponding input.
    - input takes various forms
        + `type = "text"` : the input is a text box.
            * `value="John doe"` : We can hard code a value in the text box,
        + `type="email"` : the input is a text box for email.
            * `placeholder="Enter your email"` : displays a text which is removed once we click on the box.
        + `type="number"` : Restricts the input field for number.
        + `type="date"` : Provides with a date picker and a input for only dates.
        + `type="radio"` : provides with option to show radio button with different values, grouped by a `label`
        + `type="checkbox"` : provides with multi select checkbox.
            * `checked` : pre select the value for both `radio` and `checkbox`.
        + `type="submit"` : To provide the submit button, can also use the `button` tag.
        + 
* `textarea` : when we want to have a bigger area to write text.
    - `<textarea name="message" id="message" cols="50" rows="5"></textarea>`
* `select` : Provides a drop down list.
    - `option` : the various option for the `select tag.`
    - `selected` : have a pre-selected values. `autocomplete=off` to make it work on firefox.
* `button` : provides different `button` type.
    - `type="submit"` : Creates a Submit Button
    - `type="reset"` : Creates a Reset button, which resets all the form field.

### Block and In-line ###
* **Block** : Block elements are those who occupy the whole width of the page.
    - `p`, `ul, li` etc are the example for the block level elements.
* **In-line** : Inline elements only occupy that much width which is required for them
    - `a`, `strong` : these are example for in-line elements.

### Div, Span, id, Class ###
* `div` is a block element, used to separate section of the website.
* `span` is a in-line element, used to group in-line element in a document.
* `id=main-header` : uniquely identifies an element in the documents.
* `class=card` : groups multiple element into a common group.
* `&copy;` : is a HTML entities.

### HTML Entities ###
* Reserved Characters in HTML are denoted by HTML Entities.
* `&nbsp;` : Non Breaking Space, introduces space between text.
* `&gt;` : The greater than Sign.
    - `&#62;`
* `&lt;` : The less than sign
    - `&#60;`
* `&copy;` : The Copyright character.
* `&reg;` : the Registered trademark Character.
* `&cent;` : Displays cents.
* `&pound;` : The British pound.
* `&yen;` : Japanese Yen.
* `&euro` : Euro.
* `&spades;` : the card's spades.
* `&clubs;` : the card's clubs.
* `&hearts;` : the card's hearts.
* `&diams;` : the card's diamond.
* `kbd` : displays as computer generated code.

### HTM5 Semantic Tags ###
* `header` : The header area is at the top of the web page. It has the company logo, navigation bar, with search box etc.
* `footer` : The footer area is at the bottom of the web page, generally displaying the company's trade marks etc.
* `nav` : Navigation semantics generally wraps a `ul, li` combination.
* `main` : Generally `section` and `article` are wrapped within the `main` tag.
* `section` : Generally the different header we use in a web page.
* `article` : All the content can be wrapped inside an `article` tag.
* `aside` : Not the main content, just present in the side.

 



















