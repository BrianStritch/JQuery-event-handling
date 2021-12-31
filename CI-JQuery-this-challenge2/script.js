/**
 * Steps
Inside index.js do the following

Create an on click (not a click) event handler, that triggers when elements with the class of module-nav are clicked.
Within the on click event handler, use: let, to declare a variable with the name: allModulesCardsSelector then assign it the value ".card"
Within the on click event handler, use let, to declare a variable with the name: thisModuleCardsSelector then assign it the expression "." + this.id + "-card"
Target the elements using the variable allModulesCardsSelector value as a class name, and use the removeClass method passing in the class name card-highlight
Target the elements using the variable thisModuleCardsSelector value as a class name, and use the addClass method passing in the class name card-highlight
Now click on the <li> elements Module1, Module 2 or Module 3 and the background of the cards associated with them will change to having a red background.
Enjoy!     
 */

$(".module-nav").on("click", function() {
   let allModulesCardsSelector = ".card";
   let thisModuleCardsSelector = "." + this.id + "-card";
   $(allModulesCardsSelector).removeClass("card-highlight");
   $(thisModuleCardsSelector).addClass("card-highlight");
});