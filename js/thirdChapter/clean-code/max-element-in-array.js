//deklaracja zmiennych tablicowych
const numbers = [11, 17, 13];
const numbersDouble = [3.0, 1.7, 5.1];

//definicja metody maximum
function maximum(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        var arrayElement = array[i];
        if (max < arrayElement) {
            max = arrayElement;
        }
    }
    return max;
}

//wywołanie metody maximum na tablicy numbers
const score = maximum(numbers);
console.log(maximum(numbers));

function sumOfMaxFromArrays(array, array2) {
    const maxNumber = maximum(array);
    const maxDouble = maximum(array2);

    return maxNumber + maxDouble;
}

console.log(sumOfMaxFromArrays(numbers, numbersDouble));
