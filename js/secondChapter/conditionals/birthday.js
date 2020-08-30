const birthday = 14;
const guess = prompt("Guess day of birth");

let correct = false;

if (+guess === birthday) {
    correct = true;
}

if (correct === true) {
    console.log(`CORRECT!:D day of birth is ${birthday}`);
    document.write("<h1>CORRECT!</h1>");
}

if (correct === false) {
    console.log(`Not correct`);
    document.write("<h1>nit</h1>");
}