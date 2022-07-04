"use strict";
function makeArrayToObject(arrayOfText) {
    let map = {};
    for (let i = 0; i < arrayOfText.length; i++) {
        if (!map[arrayOfText[i]]) {
            const item = arrayOfText[i];
            map[i] = item;
        }
    }
    return map;
}
function checkPalindromeText(text) {
    let reverseArrayOfText = text.split("").reverse();
    let arrayOfText = text.split("");
    let map = makeArrayToObject(arrayOfText);
    for (let i = 0; i < reverseArrayOfText.length; i++) {
        if (map[i] != reverseArrayOfText[i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindromeText("reviver"));
