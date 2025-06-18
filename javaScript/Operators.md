# JavaScript Operator Note

*Basic concept include in* [W3School](https://www.w3schools.com/js/js_operators.asp)

### Assignment with logical operator
```js
let falseTest = false && "Left Side False😥"
console.log(falseTest) // false

let undifinedTest = undefined && "Left Side False😥"
console.log(undifinedTest) // undefined

let nanTest = NaN && "Left Side False😥"
console.log(nanTest) // NaN

let nullTest = null && "Left Side False😥"
console.log(nullTest) // null

let zeroTest = 0 && "Left Side False😥"
console.log(zeroTest) // 0

let emptyStringTest = "" && "Left Side False😥"
console.log(emptyStringTest) // no value shown. becouse emptyStringTest assign empty string.
```
