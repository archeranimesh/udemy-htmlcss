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
* `<body>` tags shows all the information inside a web page. Content of the web page.
* `<!-- This is a comment -->`, this is how we can comment in HTML page which is also multi-line



























