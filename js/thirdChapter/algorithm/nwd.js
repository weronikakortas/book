function nwd(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        let tmp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = tmp;
    }

    let c = firstNumber - secondNumber;

    if (c === secondNumber) {
        return c;
    }

    if (c < secondNumber) {
        return nwd(secondNumber, c);
    } else {
        return nwd(c, secondNumber);
    }
}

console.log(nwd(12, 36));