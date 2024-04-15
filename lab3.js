let favoriteFruits = [
    "Grapes",
    "Pomegranites",
    "Pineapple",
    "Apples",
    "Mangos",
];
//Make sure it logs correctly
console.log(favoriteFruits);

//replace the first and fourth fruit in the Array
function changedMyMind(fruit1, fruit4) {
    favoriteFruits[0] = fruit1;
    favoriteFruits[3] = fruit4;
}

changedMyMind("Canteloupe", "BlueBerries");
//check if changes were made correctly
console.log(favoriteFruits);

//play around with how (*fruit) and loops
//for i < numFruit i++?
function moreTopFruits(fruit) {
    favoriteFruits.unshift(fruit);
}
moreTopFruits("Strawberries");

function trimFruits() {
    let forgottenFruit = favoriteFruits.pop();
    console.log("Sorry " + forgottenFruit + ", the list was just too long.");
    return forgottenFruit;
}
trimFruits();
console.log(favoriteFruits);
