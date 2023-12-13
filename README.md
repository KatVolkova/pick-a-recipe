# Pick a Recipe

![Pick a Recipe website shown on a variety of screen sizes](/assets/images/readme/pick-a-recipe.webp)
Visit the deployed site: [Pick a Recipe](https://github.com/KatVolkova/pick-a-recipe)

## Table of Contents
  
- [Pick a Recipe](#pick-a-recipe)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [General](#general)
    - [Header](#header)
    - [Main Content](#main-content)
      - [Radio Buttons Input](#radio-buttons-input)
      - [Show recipe button](#show-recipe-button)
      - [Recipe Card](#recipe-card)
      - [Recipe Image](#recipe-image)
      - [Show Ingredients and Instructions buttons](#show-ingredients-and-instructions-buttons)
    - [Footer](#footer)
      - [Future Implementations](#future-implementations)
  - [Design](#design)
  - [Wireframes](#wireframes)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Images](#images)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Programs/Applications/Software Used](#programsapplicationssoftware-used)
  - [Deployment](#deployment)
      - [How to Fork](#how-to-fork)
  - [Testing](#testing)
    - [Automated testing](#automated-testing)
    - [Manual testing](#manual-testing)
    - [Solved Bugs](#solved-bugs)
  - [Credits](#credits)
## Features

### General

The Pick a Recipe website has been created with a purpose of providing a quick solution for those who either not sure what to cook , or who wants to try something new. It's a simplified version of a random recipe generator: there are 10 recipes in total (five for meals and 5 for desserts). The recipes selected are simple and quick to cook. For each recipe there is a list of ingredients to be used and a clear and simple list of instructions on how the food should be cooked.

The web-site has a user-friendly interface that allows for an intuitive browsing experience.

The Pick a Recipe website consists of one page and includes the following features:

- Favicon in the browser tab:
  
![Favicon](/assets/images/readme/features/favicon.webp)

- Header
- Radio buttons input
- Show recipe button
- Footer

When button is clicked it shows the following features:

- Card containing a recipe
- Recipe title
- Recipe images
- Number of servings
- Show Ingredients button
- Show instructions button
  
  ---

The website is fully responsive: the content can be viewed on a variety of screen sizes such as desktops, laptops, tablets and movile phones.

### Header

![Header](/assets/images/readme/features/header.webp)

Header includes the project name and logo.

### Main Content

#### Radio Buttons Input

![Radio Buttons Input](/assets/images/readme/features/radio-buttons.webp)

Two radio buttons represent two categories that a user can select: "Meal" and "Dessert". Depending on the option users will be presented with either a range of dinner recipes or dessert recipes.

#### Show recipe button

![Show recipe button](/assets/images/readme/features/show-recipe-button.webp)

A "Show Recipe" button is used to generate a random recipe either from meal or from dessert category.

#### Recipe Card

![Recipe card desktop](/assets/images/readme/features/recipe-card-desktop.webp)

![Recipe card mobile](/assets/images/readme/features/recipe-card-mobile.webp)

When a "Show recipe" button is clicked a recipe card comes up. The recipe card includes the recipe title, recipe image, number of servings, show ingredients and instructions buttons. There are five recipes for a meal category and the same number for dessert category. Every time a "Show recipe" button is clicked a random card is displayed.

#### Recipe Image

![Recipe Image meals](/assets/images/readme/features/recipe-images-meals.webp)

![Recipe Image desserts](/assets/images/readme/features/recipe-images-desserts.webp)

Each recipe card has a corresponding image. There are two sets of images: one for meals option and the other is for desserts. There are ten recipes in total, five for each category.

#### Show Ingredients and Instructions buttons

![Show ingredients and instructions buttons desktop](/assets/images/readme/features/recipe-card-buttons-desktop.webp)

![Show ingredients and instructions buttons mobile](/assets/images/readme/features/recipe-card-buttons-mobile.webp)

The "Show Ingredients" button displays a list of ingredients for a particular recipe. The "Show Instructions" button displays a list of instructions for a particular recipe. A user can choose to either click one of the buttons to display ingredients or instructions only or click both buttons and see the lists either side by side in desktop version or one underneath the other for mobile screens.

![Ingredients list](/assets/images/readme/features/recipe-card-lists-desktop.webp)

![Instructions list](/assets/images/readme/features/recipe-card-lists-mobile.webp)

When the list is displayd the text on the button changes to "Hide Ingredients"/"Hide instructions".

![Hide instructions and ingredients buttons](/assets/images/readme/features/hide-ingredients-instructions-buttons.webp)

### Footer

![Footer](/assets/images/readme/features/footer.webp)
The footer section features:

- social network links to ensure that users can get news and updates about the web-site. Each icon opens a link in a new tab.

#### Future Implementations

1. As the number of recipes generated is limited I would add API to increase and adjust the recipes array to increase the variety of options
2. I would add a number of servings input so a user could specify the number of servings and the ingredients list would automatically be updated to reflect the required amount of ingredients

## Design

## Wireframes

Balsamiq software has been used to create wireframes for both desktop and mobile phones.
![Desktop Design](/assets/images/readme/wireframes/wireframes-desktop.webp)
![Mobile phone design](/assets/images/readme/wireframes/wireframes-mobile.webp)

### Colour Scheme

Colours used:

- background and buttons colour `#e9e3b4`

- Buttons colour and font colour for header and footer `#2a5039`
  
- font colour `#220901`

- recipe card colour `#F9F9F6`
  
The colours above create the right contrast and contribute to the site's readability. 

### Typography

Google fonts have been used for this website.

- Hind Guntur font style has been used as the general font.
  
  ![Hind Guntur](/assets/images/readme/typography/hind-guntur-googlefonts.webp)
  
- Vollkorn  font style has been used for the heading.
  
  ![Vollkorn](/assets/images/readme/typography/vollkorn-googlefonts.webp)
  
- Puritan font style used for all headings apart from the main h1 heading.
  
  ![Puritan](/assets/images/readme/typography/puritan-googlefonts.webp)

### Images

Pictures have been taken from [BBC Goog Food](https://www.bbcgoodfood.com/):

- [Mango pudding](https://www.bbcgoodfood.com/recipes/quick-mango-pudding)
- [Strawberry mousse](https://www.bbcgoodfood.com/recipes/strawberry-marshmallow-mousse)
- [Easy cheesecake](https://www.bbcgoodfood.com/recipes/easy-cheesecake)
- [Berry yougurt](https://www.bbcgoodfood.com/berry-yogurt-pots)
- [Banana and blueberry muffins](https://www.bbcgoodfood.com/banana-blueberry-muffins)
- [Classic pancakes](https://www.bbcgoodfood.com/recipes/classic-pancakes)
- [Vegetarian lasagne](https://www.bbcgoodfood.com/recipes/easy-vegetable-lasagne)
- [Salmon and asparagus](https://www.bbcgoodfood.com/recipes/salmon-asparagus-one-pot-gratin)
- [Oven-baked pork chops](https://www.bbcgoodfood.com/recipes/oven-baked-pork-chops)
- [Meatball and tomato soup](https://www.bbcgoodfood.com/recipes/meatball-tomato-soup)

## Technologies Used

### Languages Used

HTML, CSS, JavaScript

### Programs/Applications/Software Used

- [Git](https://git-scm.com/) - For version control.
- [Github](https://github.com/) - To save and store the files for the website.
- [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
- [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features and solve issues with responsiveness and styling.
- [Canva.com](https://canva.com/) To create and customise favicon and logo
- [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.
- [Pixlr](https://pixlr.com/) To re-size and convert pictures into webp format
- [Grammarly](https://app.grammarly.com/ ) - has been used for spell-checking
- [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
- Codeanywhere has been used as an IDE
  
## Deployment

The site is deployed using GitHub Pages - [Pick a recipe](https://katvolkova.github.io/pick-a-recipe/).
To Deploy the site using GitHub Pages:

1. Login (or sign up) to Github.
2. Go to the repository for this project, [KatVolkova/Pick-a-recipe](https://github.com/KatVolkova/pick-a-recipe).
3. Click the settings button.
4. Select pages in the left-hand navigation menu.
5. From the source dropdown, select the main branch and press save.
6. The site has now been deployed. Please note that this process may take a few minutes before the site goes live.

#### How to Fork

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [KatVolkova/Pick-a -recipe](https://github.com/KatVolkova/pick-a-recipe).
3. Click the Fork button in the top right corner.

## Testing

### Automated testing

Validator testing has been carried out using the following:

- HTML file does not contain either errors or warnings according to the official [W3C validator](https://validator.w3.org)
- CSS file does not contain either errors or warnings according to the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)
- [jshint](https://jshint.com/) has been used to validate the JavaScript.
- Lighthouse has been used within the Chrome Developer Tools to test the performance, accessibility and SEO of the website.

### Manual testing

| Feature | Expected Outcome | Testing Peformed | Result: Pass/Fail|
| --- | --- | --- |  --- |
| Show Recipe Button | When show recipe button is clicked, the random recipe card should be displayed |Clicked button |Pass |
| Radio Buttons - Meal category|When a radio button selected and "Show recipe" button  is clicked, one of the five random meal recipes should be displayed  |Meal radio button is selected, button is clicked | Pass|
| Radio Buttons - Dessert category|When a radio button selected and "Show recipe" button  is clicked, one of the five random dessert recipes should be displayed  |Dessert radio button is selected, button is clicked |Pass |
| Recipe Card |When "Show recipe" button is clicked, a recipe card should be rendered displaying: recipe title, recipe image, number of servings, "Show ingredients" and "Show instructions" buttons  |Clicked button  |Pass |
| Images |When "Show recipe" button is clicked, one of 10 images (five meal recipe images, five dessert recipe images) are expected to be rendered|Clicked button |Pass|
| Show Ingredients Button |When button is clicked a relevant list of ingredients should be displayed and the button name should change to "Hide Ingredients"|Clicked button  |Pass |
| Show Instructions Button |When button is clicked a relevant list of instructions should be displayed and the button name should change to "Hide Instructions"|Clicked button  |Pass|
| Social Networks Links |Each link should open in a separate tab when clicked|Select a link |Pass |

### Solved Bugs

## Credits

- How to iterate through an array and create an unordered/ordered  list [Stackoverflow](https://stackoverflow.com/questions/46141450/create-li-from-loeop-through-array-and-display-to-html-as-a-list
)
- How to get radio button value [Stackoverflow](https://stackoverflow.com/questions/8838648/onchange-event-handler-for-radio-button-input-type-radio-doesnt-work-as-one
)
- How to use the filter method to create separate arrays for meal and dessert categories[JavaScript Filter() Method Explained with 5 exercises 2022](https://www.youtube.com/watch?v=7uFHki-EK6g)
- Recipes have been taken from [BBC Goog Food](https://www.bbcgoodfood.com/)
- Templates for a Logo and favicon have been taken and customised using [Canva](https://www.canva.com/)
- Pictures have been from (detailed breakdown in Images section) [BBC Goog Food](https://www.bbcgoodfood.com/)
- Fonts have been taken from [Google Fonts](https://fonts.google.com/)
- Icons for the social networks links have been taken from [Font Awesome](https://fontawesome.com/)
- Pictures have been re-sized and converted into webp format using [Pixlr](https://pixlr.com/)
