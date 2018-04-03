"use strict";

var s = new Set();
[2, 3, 3, 5, 3, 4, 1, 8, 9].forEach(function (x) {
  return s.add(x);
});

// ES6方式来遍历数据
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var x = _step.value;

    console.log(x);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var s1 = new Set([1, 2, 4, 5, 3, 2, 4]);
console.log(s1);