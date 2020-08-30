const score = prompt("How many score did you get it?");

let grade;

if (score >= 90) {
    grade = 5;
} else if (score >= 80) {
    grade = 4;
} else if (score >= 70) {
    grade = 3;
} else if (score >= 60) {
    grade = 2;
} else {
    grade = 1;
}
console.log(`your grade is ${grade}`);