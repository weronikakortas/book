const preferedColorWhite = 'white';
const preferedColorBlack = 'black';

const sellerAnswer = prompt("What color is avalaible?");

let canBuy;
if (sellerAnswer === preferedColorWhite || sellerAnswer === preferedColorBlack) {
    canBuy = true;
}

if (canBuy) {
    console.log("I got my favorite shoes");
} else {
    console.log("I must continue my research");
}