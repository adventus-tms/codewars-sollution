// function isPalindrome(x) {
//     // ibu === ubi (false)
//     // malam === malam (true)
//     // malam === MALAM (false)
//     let lowerCase = x.toLowerCase()
//     let temp = lowerCase.split("")
//     let y = temp.length
//     let z = []
//     // console.log(y);
//     for (let i = y - 1; i >= 0; i--) {
//         z += temp[i];
//     }

//     // let lowerCaseSecond = z.toLowerCase()
//     if (z != null) {
//         return false
//     } else if (z === lowerCase) {
//         return true
//     } else {
//         return false
//     }

// }
// // let test = ''
// // console.log(typeof test)

// console.log(isPalindrome("''"))

// let apa = ''
// console.log(typeof apa)

function isPalindrome(myString) {
    // transform the input string to lowercase
    const lowercaseInput = myString.toLowerCase();

    // to have a similar wording
    const forward = lowercaseInput;

    // get the backward version of the lowercase string
    const backward = lowercaseInput.split("").reverse().join("");

    // check if the forward string is the same as the backward string
    return forward === backward;
}

console.log(isPalindrome("''"))