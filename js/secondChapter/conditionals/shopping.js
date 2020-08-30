const shoesSize = 39;
const price = 230;

const answerSize = prompt("What number of shoes do you get?");
const answerPrice = prompt("How much is it cost?");

let canBuy;
if (+answerSize === 39 && +answerPrice <= 230) {
    canBuy = true;
}

if (canBuy) {
    console.log("I got new pair of shoes");
} else {
    console.log("Let`s go search another one");
}