function binarySearch(t, left, right, v) {
    if (right >= left) {
        let mid = Math.floor(left + (right - left) / 2);
        if (t[mid] === v) {
            console.log(mid);
        } else {
            if (t[mid] > v) {
                binarySearch(t, left, mid - 1, v);
            } else {
                binarySearch(t, mid + 1, right, v);
            }
        }
    } else {
        console.log("Element nie znajduje się w tablicy");
    }
}

let t = [1, 2, 3, 4];
let v = 0;

binarySearch(t, 0, t.length - 1, v);