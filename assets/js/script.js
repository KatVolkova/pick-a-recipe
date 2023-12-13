/* jshint esversion: 6 */
// Declare recipe variable with recipe name, ingredients, instructions
const recipes = [
    {
        category: "meal",
        recipeName: "Classic Pancakes",
        imgUrl: "./assets/images/recipes/classic-pancakes.webp",
        ingredients: [
            "75g plain flour",
            "1 large egg/s",
            "300ml milk",
            "1tsp sunflower oil",
        ],
        instructions: [
            "Weigh the flour in a large bowl.",
            "Crack in the eggs, add half the milk and a pinch of salt.",
            "Whisk to a smooth, thick batter. Add the remaining milk and whisk again.",
            "Heat a large non-stick frying pan. Add a drizzle of oil.",
            "When the pan is hot, add enough batter to just cover the surface, swirling it.",
            "When the edges are peeling away from the sides of the pan, shake it to see if the pancake easily releases and is browning on the underside.",
            "Flip and cook the other side for a minute or two.",
        ],
    },
    {
        category: "meal",
        recipeName: "Vegetarian Lasagne",
        imgUrl: "./assets/images/recipes/vegetarian-lasagne.webp",
        ingredients: [
            "1 red pepper/s, cut into large chunks",
            "1 aubergine/s, cut into ½ cm thick slices",
            "5 tbsp olive oil",
            "100g lasagne sheets",
            "95g mozzarella",
            "3 cherry tomatoes, halved",
        ],
        instructions: [
            "Heat the oven to 200C/180C fan/gas 6.",
            "Lightly oil two large baking trays and add the peppers and aubergines.",
            "Toss with the olive oil, season well, then roast for 25 mins until lightly browned.",
            "Reduce the oven to 180C/160C fan/gas 4. Lightly oil a 30 x 20cm ovenproof dish.",
            "Arrange a layer of the vegetables on the bottom, then pour over a third of the tomato sauce.",
            "Top with a layer of lasagne sheets. Repeat until you have three layers of pasta.",
            "Scatter over the mozzarella and cherry tomatoes.",
            "Bake for 45 mins until bubbling and golden.",
        ],
    },
    {
        category: "meal",
        recipeName: "Salmon & Asparagus",
        imgUrl: "./assets/images/recipes/salmon-and-asparagus-gratin.webp",
        ingredients: [
            "10g dried breadcrumbs",
            "50g parmesan",
            "1 tsp olive oil",
            "15g unsalted butter",
            "1 red onion/s, finely chopped",
            "1 garlic clove/s, crushed or finely grated",
            "100ml double cream",
            "50ml milk",
            "200g asparagus, trimmed and halved",
            "1 skinless salmon fillet/s",
        ],
        instructions: [
            "Heat the oven to 200C/180C fan/gas 6.",
            "Combine the breadcrumbs, parsley and parmesan.",
            "Heat the oil and butter in a large casserole over medium heat and fry the onion for 5 mins until starting to soften.",
            "Stir in the garlic, and cook for 1-2 mins more to soften slightly, then stir in the cream, milk and remaining parmesan.",
            "Bring to a simmer and cook until the cheese has melted, then season well, stir and remove from the heat.",
            "Tip in the asparagus and ensure it is submerged in the sauce.",
            "Nestle in the salmon fillets, skin-side down.",
            "Scatter the cheesy breadcrumb mixture over the salmon fillets, then transfer to the oven and bake for 14-16 mins until the salmon is cooked through and the breadcrumb topping is lightly golden.",
        ],
    },
    {
        category: "meal",
        recipeName: "Oven-baked Pork Chops",
        imgUrl: "./assets/images/recipes/oven-baked-pork-chops.webp",
        ingredients: [
            "500gr new potatoes, halved ",
            "1 tbsp olive oil",
            "2 garlic cloves, bashed",
            "2 tbsp honey",
            "2 tbsp wholegrain mustard",
            "1 thick-cut bone-in pork chop/s",
        ],
        instructions: [
            "Heat the oven to 200C/fan 180C/gas 6.",
            "Toss the potatoes, oil, garlic and thyme on a shallow roasting tray and mix well with your hands to coat in the oil.",
            "Season well. Roast for 25 mins until the potatoes are just turning tender when pierced with a knife.",
            "Whisk the honey and mustard together in a small bowl.",
            "Season the pork chops with salt and pepper, then brush with half the marinade.",
            "Nestle into the potatoes on the tray, and bake for another 10 mins before turning the chops and spooning over the remaining glaze.",
            "Continue to bake for 10 more mins until cooked through.",
        ],
    },
    {
        category: "meal",
        recipeName: "Meatball & Tomato Soup",
        imgUrl: "./assets/images/recipes/meatball-tomato-soup.webp",
        ingredients: [
            "½ tbsp rapeseed oil",
            "1 onion/s, finely chopped",
            "1 red pepper/s, deseeded and sliced",
            "1 garlic clove/s, crushed",
            "½ tsp chilli flakes",
            "100g canned chopped tomatoes",
            "50g giant couscous",
            "100ml hot vegetable stock",
            "8 pork meatballs",
            "50g baby spinach",
        ],
        instructions: [
            "Heat the oil in a saucepan.",
            "Fry the onion and peppers for 7 mins, then stir through the garlic and chilli flakes and cook for 1 min.",
            "Add the tomatoes, giant couscous and veg stock and bring to a simmer.",
            "Season to taste, then add the meatballs and spinach.",
            "Simmer for 5-7 mins or until cooked through.",
            "Ladle into bowls and top with the basil and some parmesan, if you like.",
        ],
    },
    {
        category: "dessert",
        recipeName: "Mango Pudding",
        imgUrl: "./assets/images/recipes/mango-pudding.webp",
        ingredients: [
            "1 large ripe mango/s",
            "2 scoops vanilla ice cream",
            "1 tbsp thick cream",
            "1 passion fruit/s",
        ],
        instructions: [
            "Peel and dice a large ripe mango; whizz to a purée in a food processor.",
            "Add 6 scoops of vanilla ice cream and 2 tbsp thick cream and whizz again.",
            "Spoon into bowls and scoop ½ passion fruit over each.",
        ],
    },
    {
        category: "dessert",
        recipeName: "Strawberry Mousse",
        imgUrl: "./assets/images/recipes/strawberry-mousse.webp",
        ingredients: [
            "100g strawberries",
            "50g caster sugar",
            "100ml double cream",
        ],
        instructions: [
            "Choose four of the best-looking strawberries and set these aside to finish the mousse, then hull and roughly chop the rest.",
            "Tip these into a blender or food processor along with the sugar and blitz until smooth.",
            "Whisk the cream to stiff peaks. Reserve roughly 4 tbsp of the strawberry purée in a small dish, then fold the rest through the whipped cream until it turns an even shade of pink.",
            "Divide the reserved purée between four small serving glasses or ramekins.",
            "Spoon the mousse over the top, then chill for at least 1 hr. Will keep chilled for up to a day.",
            "Just before serving, halve the reserved strawberries and use these to decorate the mousse.",
        ],
    },
    {
        category: "dessert",
        recipeName: "Easy Cheesecake",
        imgUrl: "./assets/images/recipes/easy-cheesecake.webp",
        ingredients: [
            "2 shortbread biscuits",
            "100g tub soft cheese",
            "1 lime zest/s and juice",
            "1 tbsp icing sugar",
            "½ a 200g pack of frozen mixed berries",
        ],
        instructions: [
            "Put the shortbread biscuits into a plastic bag and bash with a rolling pin until broken.",
            "Divide between two dessert glasses.",
            "Beat together the soft cheese with the zest of a lime and 2 tbsp icing sugar until smooth.",
            "Put this on top of each biscuit base and smooth out with the back of a spoon.",
            "Take the mixed frozen berries, defrost and blend half with 1 tbsp icing sugar and the juice of the lime.",
            "Pour this on top of each cheesecake and scatter with a few extra whole berries.",
            "Serve or sit in the fridge for a few hours before serving.",
        ],
    },
    {
        category: "dessert",
        recipeName: "Berry Yogurt",
        imgUrl: "./assets/images/recipes/berry-yogurt-pots.webp",
        ingredients: [
            "100g frozen mixed berry",
            "100g Arla Protein Strawberry yogurt",
            "1tbsp honey or agave syrup",
        ],
        instructions: [
            "Blend berries.",
            "Add Arla Protein Strawberry yogurt and honey or agave syrup in a food processor for 20 seconds until it comes together to a smooth ice-cream texture.",
            "Scoop into bowls and serve.",
        ],
    },
    {
        category: "dessert",
        recipeName: "Banana & Blueberry Muffins",
        imgUrl: "./assets/images/recipes/banana-blueberry-muffin.webp",
        ingredients: [
            "150g self-raising flour",
            "0.5 tsp bicarbonate of soda",
            "50g light muscovado sugar",
            "25g porridge oats, plus 1 tbsp for topping",
            "1 medium banana/s",
            "175ml carton buttermilk",
            "2 tbsp light olive oil",
            "1 egg white/s",
            "100g punnet blueberries",
        ],
        instructions: [
            "Heat oven to 180C/fan 160C/gas 4 and line a 12-hole muffin tin with paper muffin cases.",
            "Tip the flour and bicarbonate of soda into a large bowl.",
            "Hold back 1 tbsp of the sugar, then mix the remainder with the flour and 50g oats.",
            "Make a well in the centre. In a separate bowl, mash the bananas until nearly smooth.",
            "Stir the buttermilk, oil and egg whites into the mashed banana until evenly combined.",
            "Pour the liquid mixture into the well and stir quickly and sparingly with a wooden spoon.",
            "The mix will look lumpy and may have the odd fleck of flour still visible, but do not be tempted to over-mix.",
            "Tip in the blueberries and give it just one more stir.",
            "Divide the mix between the muffin cases, they will be quite full, then sprinkle the tops with the final tbsp of the oats and the rest of the sugar.",
            "Bake for 18-20 mins until risen and dark golden. ",
            "Cool for 5 mins in the tray before lifting out onto a rack to cool completely.",
        ],
    },
];

// Hide recipe card until show recipe button is clicked
const recipeCard = document.getElementById("recipeCard");
recipeCard.style.display = "none";
// Declare variable to store selected catagory
let selectedCategory = "meal";
/** Extract value from selected radio button*/
function getCategoryValue(event) {
    selectedCategory = event.target.id;
}
// Iterate through selected inputs and add eventListener
const categoryInputs = document
    .querySelectorAll("input[name='category']")
    .forEach((input) => {
        input.addEventListener("change", getCategoryValue);
    });
console.log(selectedCategory);
// **Add list element to recipe card */
function addListEL(listId, lists) {
    const listEl = document.getElementById(listId);
    listEl.style.display = "none";
    listEl.textContent = "";
    for (const list of lists) {
        const recipeListEl = document.createElement("li");
        recipeListEl.classList.add(`${listId}List`);
        recipeListEl.textContent = list;
        listEl.append(recipeListEl);
    }
}

/**Generate random recipe and display recipe details */
function getRandomRecipe() {
    // Add back recipe card visibility
    recipeCard.style.display = "block";
    // Create new array based on result of radio button selection
    const categoryRecipes = recipes.filter(
        (recipe) => recipe.category === selectedCategory
    );
    // Check if there are recipes for selected recipe
    if (categoryRecipes.length === 0) {
        alert(`No recipes found for ${selectedCategory}.`);
        return;
    }
    console.log(categoryRecipes);
    //Get random recipe according to the length of categoryRecipes array
    const randomRecipes = categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
    console.log(randomRecipes);
    // Add recipe title to recipe card
    const recipeName = document.getElementById("recipeTitle");
    recipeName.innerText = randomRecipes.recipeName;
    // Add recipe image to recipe card
    const recipeImage = document.getElementById("recipeImage");
    recipeImage.src = randomRecipes.imgUrl;
    //Add ingredients button
    addIngredientsBtn();
    //  Add ingredients list
    addListEL("ingredients", randomRecipes.ingredients);
    //Add instructions button
    addInstructionsBtn();
    //Add instructions list
    addListEL("instructions", randomRecipes.instructions);
}
    /**Add button to recipe card */
    function addIngredientsBtn() {
        const recipeIngredientsBtn = document.querySelector("#showIngredientsBtn");
        recipeIngredientsBtn.textContent = "Show Ingredients";
        recipeIngredientsBtn.addEventListener("click", showingredientsBtn);
    }
    /**Add visibility effect to show ingredients button */
    function showingredientsBtn() {
        console.log("clicked");
        const ingredientsUl = document.getElementById("ingredients");
        const recipeIngredientsBtn = document.querySelector("#showIngredientsBtn");
        if (ingredientsUl.style.display === "none") {
            ingredientsUl.style.display = "block";
            recipeIngredientsBtn.textContent = "Hide Ingredients";
        } else {
            ingredientsUl.style.display = "none";
            recipeIngredientsBtn.textContent = "Show  Ingredients";
        }
    }
    /**Add button to recipe card */
    function addInstructionsBtn() {
        const recipeInstructionsBtn = document.querySelector("#showInstructionsBtn");
        recipeInstructionsBtn.textContent = "Show Instructions";
        recipeInstructionsBtn.addEventListener("click", showInstructionsBtn);
    }
    /**Add visibility effect to show instructions button */
    function showInstructionsBtn() {
        console.log("clicked");
        const instructionsOl = document.getElementById("instructions");
        const recipeInstructionsBtn = document.querySelector("#showInstructionsBtn");
        if (instructionsOl.style.display === "none") {
            instructionsOl.style.display = "block";
            recipeInstructionsBtn.textContent = "Hide Instructions";
        } else {
            instructionsOl.style.display = "none";
            recipeInstructionsBtn.textContent = "Show  Instructions";
        }
    }
