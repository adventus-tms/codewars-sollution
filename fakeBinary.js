/*
    Masukan berupa string
    -> Di bawah 5 digit di ubah menjadi 0
    -> 5 dan di atas nya, di ubah menjadi 1
*/
function fakeBin(x) {
    let str = x.split("")
    let temp = ''

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] < 5) {
            temp += 0
        } else if (str[i] >= 5) {
            temp += 1
        }
    }
    return temp
}

console.log(fakeBin("45385593107843568"))