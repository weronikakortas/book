function bubbleSort(arr) {
    let length = arr.length
    for (let j = 0; j < length - 1; j += 1) {
        for (let i = 0; i < length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i);
            }
        }
    }
}

function swap(arr, i) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
}

function display(arr) {
    for (let j = 0; j < arr.length; j += 1) {
        console.log(arr[j]);
    }
}

let arr = [3, -1, -5, 4, 6];
bubbleSort(arr);
display(arr);
