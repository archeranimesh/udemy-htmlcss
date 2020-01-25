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

* HTML is make of tags.
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
























