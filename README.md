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
    - [Additional Testing](#additional-testing)
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
- [Responsive Designer Checker](<https://responsivedesignchecker.com/>) To check web-site responsiveness.
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

### Additional Testing

| Number | Recipe Name | Ingredients List | Instructions List| Result: pass/fail|
| --- | --- | --- | --- | --- |
|1 |Classic Pancakes |"75g plain flour","1 large egg","300ml milk","1tsp sunflower oil",|"Weigh the flour in a large bowl.","Crack in the eggs, add half the milk and a pinch of salt.","Whisk to a smooth, thick batter. Add the remaining milk and whisk again.","Heat a large non-stick frying pan. Add a drizzle of oil.","When the pan is hot, add enough batter to just cover the surface, swirling it.","When the edges are peeling away from the sides of the pan, shake it to see if the pancake easily releases and is browning on the underside.","Flip and cook the other side for a minute or two."|Pass |
|2 |Vegetarian Lasagne| "1 red pepper/s, cut into large chunks","1 aubergine/s, cut into ½ cm thick slices","5 tbsp olive oil","100g lasagne sheets","95g mozzarella","3 cherry tomatoes, halved"|"Heat the oven to 200C/180C fan/gas 6.","Lightly oil two large baking trays and add the peppers and aubergines.","Toss with the olive oil, season well, then roast for 25 mins until lightly browned.","Reduce the oven to 180C/160C fan/gas 4. Lightly oil a 30 x 20cm ovenproof dish.","Arrange a layer of the vegetables on the bottom, then pour over a third of the tomato sauce.","Top with a layer of lasagne sheets. Repeat until you have three layers of pasta.","Scatter over the mozzarella and cherry tomatoes.","Bake for 45 mins until bubbling and golden."|Pass |
|3 |Salmon & Asparagus|"10g dried breadcrumbs","50g parmesan","1 tsp olive oil","15g unsalted butter","1 red onion/s, finely chopped","1 garlic clove/s, crushed or finely grated","100ml double cream","50ml milk","200g asparagus, trimmed and halved","1 skinless salmon fillet/s"| "Heat the oven to 200C/180C fan/gas 6.","Combine the breadcrumbs, parsley and parmesan.","Heat the oil and butter in a large casserole over medium heat and fry the onion for 5 mins until starting to soften.","Stir in the garlic, and cook for 1-2 mins more to soften slightly, then stir in the cream, milk and remaining parmesan.","Bring to a simmer and cook until the cheese has melted, then season well, stir and remove from the heat.","Tip in the asparagus and ensure it is submerged in the sauce.","Nestle in the salmon fillets, skin-side down.","Scatter the cheesy breadcrumb mixture over the salmon fillets, then transfer to the oven and bake for 14-16 mins until the salmon is cooked through and the breadcrumb topping is lightly golden."|Pass |
|4 |Oven-baked Pork Chops|"500gr new potatoes, halved ","1 tbsp olive oil","2 garlic cloves, bashed","2 tbsp honey","2 tbsp wholegrain mustard","1 thick-cut bone-in pork chop/s"|"Heat the oven to 200C/fan 180C/gas 6.","Toss the potatoes, oil, garlic and thyme on a shallow roasting tray and mix well with your hands to coat in the oil.","Season well. Roast for 25 mins until the potatoes are just turning tender when pierced with a knife.","Whisk the honey and mustard together in a small bowl.","Season the pork chops with salt and pepper, then brush with half the marinade.","Nestle into the potatoes on the tray, and bake for another 10 mins before turning the chops and spooning over the remaining glaze.","Continue to bake for 10 more mins until cooked through."|Pass |
|5 |Meatball & Tomato Soup|"½ tbsp rapeseed oil","1 onion/s, finely chopped","1 red pepper/s, deseeded and sliced","1 garlic clove/s, crushed","½ tsp chilli flakes","100g canned chopped tomatoes","50g giant couscous","100ml hot vegetable stock","8 pork meatballs","50g baby spinach"|"Heat the oil in a saucepan.","Fry the onion and peppers for 7 mins, then stir through the garlic and chilli flakes and cook for 1 min.","Add the tomatoes, giant couscous and veg stock and bring to a simmer.","Season to taste, then add the meatballs and spinach.","Simmer for 5-7 mins or until cooked through.","Ladle into bowls and top with the basil and some parmesan, if you like."|Pass |
|6 |Mango Pudding|"1 large ripe mango/s","2 scoops vanilla ice cream","1 tbsp thick cream","1 passion fruit/s"| "Peel and dice a large ripe mango; whizz to a purée in a food processor.","Add 6 scoops of vanilla ice cream and 2 tbsp thick cream and whizz again.","Spoon into bowls and scoop ½ passion fruit over each."|Pass |
|7 |Strawberry Mouss|"100g strawberries","50g caster sugar","100ml double cream"|"Choose four of the best-looking strawberries and set these aside to finish the mousse, then hull and roughly chop the rest.","Tip these into a blender or food processor along with the sugar and blitz until smooth.","Whisk the cream to stiff peaks.Reserve roughly 4 tbsp of the strawberry purée in a small dish, then fold the rest through the whipped cream until it turns an even shade of pink.","Divide the reserved purée between four small serving glasses or ramekins.","Spoon the mousse over the top, then chill for at least 1 hr. Will keep chilled for up to a day.","Just before serving, halve the reserved strawberries and use these to decorate the mousse."|Pass |
|8 |Easy Cheesecake|"2 shortbread biscuits","100g tub soft cheese","1 lime zest/s and juice","1 tbsp icing sugar","½ a 200g pack of frozen mixed berries"|"Put the shortbread biscuits into a plastic bag and bash with a rolling pin until broken.","Divide between two dessert glasses.","Beat together the soft cheese with the zest of a lime and 2 tbsp icing sugar until smooth.","Put this on top of each biscuit base and smooth out with the back of a spoon.","Take the mixed frozen berries, defrost and blend half with 1 tbsp icing sugar and the juice of the lime.","Pour this on top of each cheesecake and scatter with a few extra whole berries.","Serve or sit in the fridge for a few hours before serving."|Pass |
|9 |Berry Yogurt|"100g frozen mixed berry","100g Arla Protein Strawberry yogurt","1tbsp honey or agave syrup"|"Blend berries.","Add Arla Protein Strawberry yogurt and honey or agave syrup in a food processor for 20 seconds until it comes together to a smooth ice-cream texture.","Scoop into bowls and serve."|Pass |
|10 |Banana & Blueberry Muffins|"150g self-raising flour","0.5 tsp bicarbonate of soda","50g light muscovado sugar","25g porridge oats, plus 1 tbsp for topping","1 medium banana/s","175ml carton buttermilk","2 tbsp light olive oil","1 egg white/s","100g punnet blueberries",|"Heat oven to 180C/fan 160C/gas 4 and line a 12-hole muffin tin with paper muffin cases.","Tip the flour and bicarbonate of soda into a large bowl.","Hold back 1 tbsp of the sugar, then mix the remainder with the flour and 50g oats.","Make a well in the centre. In a separate bowl, mash the bananas until nearly smooth.","Stir the buttermilk, oil and egg whites into the mashed banana until evenly combined.","Pour the liquid mixture into the well and stir quickly and sparingly with a wooden spoon.","The mix will look lumpy and may have the odd fleck of flour still visible, but do not be tempted to over-mix.","Tip in the blueberries and give it just one more stir.","Divide the mix between the muffin cases, they will be quite full, then sprinkle the tops with the final tbsp of the oats and the rest of the sugar.","Bake for 18-20 mins until risen and dark golden. ","Cool for 5 mins in the tray before lifting out onto a rack to cool completely."|Pass |

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
