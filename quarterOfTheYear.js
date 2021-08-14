/* 1 Tahun bisa dibagi menjadi 4 Periode Kuartal (Q), yaitu :
Q1 = Jan - Mar
Q2 = Apr - Jun
Q3 = Jul - Sep
Q4 = Okt - Dec */

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
        return 1
    } else if (month >= 4 && month <= 6) {
        return 2
    } else if (month >= 7 && month <= 9) {
        return 3
    } else if (month >= 10 && month <= 12) {
        return 4
    }
}

console.log(quarterOf(5))

/*
    // short solution from Codewars

    const quarterOf = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
    }
*/