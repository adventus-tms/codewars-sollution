function sumCubes(num) {
    let temp = 0
    for (let i = 1; i <= num; i++) {
        temp += i ** 3
    }

    return temp
}

console.log(sumCubes(4))