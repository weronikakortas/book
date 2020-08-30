const streets = ["Bażyńskiego", "Grunwaldzka", "Abrahama", "Wita Stwosza"];

console.log(streets);

for (var street of streets) {
    console.log(street);
}

for (let i = 0; i < streets.length; i += 1) {
    console.log(streets[i]);
}
