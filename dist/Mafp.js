"use strict";
var _a, _b, _c;
let myMap = new Map();
myMap.set("apple", []);
myMap.set("microsoft", []);
(_a = myMap.get("apple")) === null || _a === void 0 ? void 0 : _a.push("1234");
(_b = myMap.get("microsoft")) === null || _b === void 0 ? void 0 : _b.push("1234");
(_c = myMap.get("apple")) === null || _c === void 0 ? void 0 : _c.push("54434");
console.log(myMap);
//Map(2) { 'apple' => [ '1234', '54434' ], 'microsoft' => [ '1234' ] }
