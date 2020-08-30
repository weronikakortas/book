//code to refactor
function draw(numb) {
    if (numb == 'Merkury') {
        return 1
    } else if (numb == 'Wenus') {
        return 2
    } else if (numb == 'Ziemia') {
        return 3
    } else if (numb == 'Mars') {
        return 4
    } else if (numb == 'Jowisz') {
        return 5
    } else if (numb == 'Saturn') {
        return 6
    } else if (numb == 'Uran') {
        return 7
    } else if (numb == 'Neptun') {
        return 8
    }
}

console.log(draw('Wenus'))
