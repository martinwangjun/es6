"use strict";

var arr = [1, 2, 4, 5, 6, 2, 4, 3];

// ES6
function unique(arr) {
  return Array.from(new Set(arr)).sort();
}

console.log(unique(arr));