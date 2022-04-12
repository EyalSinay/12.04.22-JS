/*
from 6.3:
const arrLength = arr => {
    let myLengths = [];
    for (let i = 0; i < arr.length; i++) {
        myLengths.push(arr[i].length);
    }
    return myLengths;
}

let arr1 = ["boo", "doooo", "hoo", "ro"];

console.log(arrLength(arr1));
*/

const arrLength = arr => {
    let myLengths = [];
    let i = 0;
    while (i < arr.length) {
        myLengths.push(arr[i].length);
        i++
    }
    return myLengths;
}

let arr1 = ["boo", "doooo", "hoo", "ro"];

console.log(arrLength(arr1));