// When test in code editor
const num = [34, -345, -1, 100];

function findSmallestInt() {
    // let num = [34, -345, -1, 100];
    let small = num[0];
    for (let i = 1; i <= num.length; i++) {
        if (num[i] < small) {
            small = num[i];
        }
    }
    return small;
}

console.log(findSmallestInt());
// -------------------------------------------------------

// When submit in CodeWars
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let small = args[0];
        for (let i = 1; i <= args.length; i++) {
            if (args[i] < small) {
                small = args[i];
            }
        }
        return small;
    }
}