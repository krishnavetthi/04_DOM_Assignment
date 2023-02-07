const barbarian_level = document.querySelectorAll(".clash-card__level.clash-card__level--barbarian");
const charactertwo_level = document.querySelectorAll(".clash-card__level.clash-card__level--archer");
const giant_level = document.querySelectorAll(".clash-card__level.clash-card__level--giant");
const characterfour_level = document.querySelectorAll(".clash-card__level.clash-card__level--goblin");
const wizard_level = document.querySelectorAll(".clash-card__level.clash-card__level--wizard");

const barbarian_div = document.querySelectorAll(".clash-card__unit-stats.clash-card__unit-stats--barbarian.clearfix");
const charactertwo_div = document.querySelectorAll(".clash-card__unit-stats.clash-card__unit-stats--archer.clearfix");
const giant_div = document.querySelectorAll(".clash-card__unit-stats.clash-card__unit-stats--giant.clearfix");
const characterfour_div = document.querySelectorAll(".clash-card__unit-stats.clash-card__unit-stats--goblin.clearfix");
const wizard_div = document.querySelectorAll(".clash-card__unit-stats.clash-card__unit-stats--wizard.clearfix");

const thirdelementindivList = document.querySelectorAll(".one-third.no-border");
console.log(thirdelementindivList.length);
for(let i=0;i<thirdelementindivList.length;i++){
    thirdelementindivList[i].style.color="#ffffff";
}

changeColor(barbarian_level,barbarian_div);
changeColor(charactertwo_level,charactertwo_div);
changeColor(giant_level,giant_div);
changeColor(characterfour_level,characterfour_div);
changeColor(wizard_level,wizard_div);

function changeColor(level,div){
    console.log(level);
    // let levelArray = Array.from(level);
    // console.log(levelArray);
    // let computedStyleLevel = getComputedStyle(levelArray[0]);
    let computedStyleLevel = getComputedStyle(level[0]);
    let color = computedStyleLevel.color;
    console.log(color);
    // let divArray = Array.from(div);
    // divArray[0].style.backgroundColor=color;
    // divArray[0].style.color="#ffffff";
    console.log(div[0]);
    div[0].style.backgroundColor = color;
    div[0].style.color="#ffffff";
}
