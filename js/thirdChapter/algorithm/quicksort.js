function quicksort(t, left, right) {
    if (left < right) {
        let pivot = partition(t, left, right);
        quicksort(t, left, pivot - 1);
        quicksort(t, pivot + 1, right);
    }
}

function partition(t, left, right) {
    let pivot = right;
    let pivotValue = t[pivot];
    swap(t, pivot, right);
    let store = left;
    for (let i = left; i < right; i += 1) {
        if (t[i] <= pivotValue) {
            swap(t, i, store);
            store = store + 1;
        }
    }
    swap(t, store, right);
    return store;
}

function swap(t, i, j) {
    let tmp = t[i];
    t[i] = t[j];
    t[j] = tmp;
}

function display(t) {
    for (let i = 0; i < t.length; i += 1) {
        console.log(t[i]);
    }
}

let t = [3, -1, 2, 4]

quicksort(t, 0, t.length - 1);

display(t);