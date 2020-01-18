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
























