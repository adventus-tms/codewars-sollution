function countPositivesSumNegatives(args) {
    if (args == null || args.length < 1) {
        return []
    }

    let arr = [0, 0]
    for (let i = 0; i <= (args.length) - 1; i++) {
        if (args[i] > 0) {
            arr[0]++
        } else {
            arr[1] += args[i]
        }
    }

    return arr
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([]))


// function countPositivesSumNegatives(args) {

//     let countPositives = 0
//     let sumNegatives = 0
//     for (let i = 0; i <= (args.length) - 1; i++) {
//         if (args[i] > 0) {
//             countPositives[i]++
//         } else {
//             sumNegatives += args[i]
//         }
//     }

//     if (args == null || args.length < 1) {
//         return []
//     } else {
//         return [countPositives, sumNegatives]
//     }

// }