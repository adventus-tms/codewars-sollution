function makeNegative(num) {
    if (num === 0) {
        return 0;
    } else if (num > 0) {
        return num * -1;
    } else if (num < 0) {
        return num;
    }
}

console.log(makeNegative(0.12));