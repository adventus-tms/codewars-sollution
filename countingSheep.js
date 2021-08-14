function countSheeps(num) {
    let count = 0
    for (let i = 0; i <= num.length - 1; i++) {
        if (num[i] === true) {
            count++
        }
    }
    return count
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]))

// --> TANPA PARAMETER
// function sum() {
//     let val = 0
//     for (let i = 0; i <= arguments.length - 1; i++) {
//         val += arguments[i]
//     }
//     return val
// }

// console.log(sum(1, 2, 3))


// --> PAKAI PARAMETER, parameter itu sama seperti variabel
// --> Argumen itu, nilai yang dimasukkan ke parameter
// function sum(args) {
//     let val = 0
//     for (let i = 0; i <= args.length - 1; i++) {
//         val += args[i]
//     }
//     return val
// }

// console.log(sum([1, 2, 3]))