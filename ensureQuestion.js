// Jika di akhir indeks string, ada tanda tanya (?), kembalikan string tersebut
// Jika tidak ada tanda tanya (?) di akhir string, tambahkan tanda tanya (?) di akhir string

function ensureQuestion(s) {
    if (s[s.length - 1] == "?") {
        return s
    } else {
        return s += "?"
    }
}

console.log(ensureQuestion("Yes?"))
console.log(ensureQuestion("No"))