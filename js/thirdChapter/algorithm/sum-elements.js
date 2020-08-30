function sumElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
}

function display(number) {
    console.log(number);
}

const arr = [2, 3, 4];
display(sumElements(arr));