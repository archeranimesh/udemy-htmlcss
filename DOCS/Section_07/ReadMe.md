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


## Reference ##
* [OpenLayers | Quick Start](https://openlayers.org/en/latest/doc/quickstart.html)
* [Font Awesome ](https://fontawesome.com/)
* [Google Fonts | Roboto](https://fonts.google.com/specimen/Roboto?query=robo&selection.family=Roboto)


