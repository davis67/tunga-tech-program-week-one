// b = [1, 2, 3];
// c = 2;
// let bCounter = 0;
// for (let aCounter = 2; aCounter <= a.length; aCounter += c) {

//     a.splice(aCounter, 0, b[bCounter])
//     bCounter++;
//     aCounter++;
// }

// result["a", "d", 1, "c", "d", 2, "e", "f", 3]

// const longest = "the word is longer than this one".split(" ").reduce(function (current, next) {
//     console.log(current, next)
//     if (current.length < next.length) {
//         return next;
//     } else {
//         return current;
//     }
// }, "i");

// let longest = "the word is longest among others".split(" ");
// let other = 0;
// for (let i = 0; i < longest.length; i++) {
//     if (longest[i].length > other) {
//         other = longest[i].length;
//     }

// }
// console.log(other)

// let longestArray = [
//     [4, 9, 1, 3],
//     [13, 35, 18, 26],
//     [32, 35, 97, 39],
//     [1000000, 1001, 857, 1]
// ]
// const longest = longestArray.reduce(function (current, next) {
//     let currentMax = current.reduce(function (a, b) {
//         return Math.max(a, b);
//     }, 0);
//     let nextMax = next.reduce(function (a, b) {
//         return Math.max(a, b);
//     }, 0);
//     if (currentMax < nextMax) {
//         return next;
//     }
//     return current;
// }, []);

// let longest = longestArray.reduce(function (current, next) {
//     if (Math.max(...current) < Math.max(...next)) {
//         return next;
//     }

//     return current;
// }, [])

// console.log(longest)
// for (longest of longestArray) {
//     console.log(longest)
// }


// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     let targetCount = target.length;
//     let strFinal = str.slice(-targetCount);
//     return (strFinal == target) ? true : false;
// }

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Open sesame", "esame"));
// console.log(confirmEnding("Open sesame", "same"));
// console.log(confirmEnding("Abstraction", "action"));

// let str = "davis";
// let num = 3;
// // console.log(Array(num + 1).join(str))
// // console.log(Array(num).fill("da").join(""))
// console.log(Array.from({
//     length: 3
// }, () => "davis"))

// "A-tisket a-tasket A green and yellow basket".split("").splice(0, 8).join("").concat("...")
// const newArr = [1, 2, 3].forEach((element) => {
//     return element;
//     // if (element % 2 == 0)
//     //     return element;
//     // else
//     //     return "undefined";
// });
// console.log(newArr)
// function func(num) {
//     if (num % 2 == 0)
//         return num;
//     else
//         return "undefined";
// }

let newArr = ["floor", "for"];
firstArr = newArr[0].includes(newArr[1])

console.log(firstArr)
// console.log(secArr)