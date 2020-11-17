# Deep Woods Mushrooms

Deep Woods Mushrooms is Dakota Fritz's project website for his Front-End Web Development course with Code Louisville in the Fall 2020 semester. 

The idea behind this website was to re-work and ultimately modernize the existing website for the business Deep Woods Mushrooms in Western North Carolina. Dakota grew up working for Greg, the owner of the mushroom farm, and saw the need for a new website after reviewing Greg's [current website](www.deepwoodsmushrooms.net). The current website has information on different pages and some of it is currently outdated. Though the business began primarily through growing mushrooms, the majority of business in recent years has actually come through being an agritourism destination near Asheville. This transition in business brings the need for a re-worked website with simple, easy to access information about the business. This new website gives quick, clear information on the who, what, where, when, why, and how of Deep Woods Mushrooms.

This project includes all necessary requirements for the Front-End Web Development Final Project standards.

Here are the features to look for in the website:
* A Mobile-First Design.
* A Hamburger Menu in screensizes 767px and smaller that then turns into a horizontal menu for screensizes 768px and larger using jQuery and Media Queries.
* Two Media Queries - The first at 768px and the second at 992px.
* Flexbox added to seven different classes (`.nav_bar`, `.section_container`,`.about_greg`, `.supplies_info`, `.type_of_tour`, `.footer_container`, `.map_locations`)
* Use of `:nth-child()` CSS selector. This is used on `.footer_container` to add a vertical bar (|) and margin between items in the footer.
* Use of Google Maps API. Six markers are on map each with an alphabetical label and corresponding info window that pops up when clicked.
* Show/Hide content in the `.pizza-slide` class, while toggling classes to alternate between + and - using the `:after` pseudo-element.
* Contact Form that collects input into variables and exports to formatted email template using a `mailto:` link.