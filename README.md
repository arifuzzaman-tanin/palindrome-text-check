```javascript
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
```

### HOW TO RUN

<small style='color:gray'>To compile TypeScript to javascript, run the command.</small>

```diff
tsc
```

<small style='color:gray'>Run the main js file</small>

```diff
node main.js
```

<small style='color:gray'>
TypeScript has a dependency of <b>node js</b>, if node js is not available on your machine then install the node js.
</small>
