'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Usage of assignment in ES6 way
 * 
 * @author: martinwangjun@163.com
 */

// 1. Switch values
var x = 1;
var y = 2;

var _ref = [y, x];
x = _ref[0];
y = _ref[1];

console.log('UNIT1: x, y =', x, y);

// 2. ruturn multiple values from a function

// Return an array
function example() {
  return [1, 2, 3];
}

var _example = example(),
    _example2 = _slicedToArray(_example, 3),
    a = _example2[0],
    b = _example2[1],
    c = _example2[2];

console.log('UNIT2: a, b, c = ', a, b, c);

// return an object
function example2() {
  return {
    foo: 111,
    bar: 222
  };
}

var _example3 = example2(),
    foo = _example3.foo,
    bar = _example3.bar;

console.log('UNIT2: foo, bar =', foo, bar);

// 3. To be the parameters in a function
function f1(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 3),
      x = _ref3[0],
      y = _ref3[1],
      z = _ref3[2];

  console.log('UNIT3: x, y, z = ', x, y, z);
}
f1([3, 2, 1]);

function f2(_ref4) {
  var m = _ref4.m,
      n = _ref4.n,
      k = _ref4.k;

  console.log('UNIT3: m, n, k = ', m, n, k);
}
f2({ k: 9, n: 8, m: 7 });

// 4. Get JSON data
var jsonData = {
  id: 12,
  status: 'OK',
  data: [89, 98, 99]
};

var id = jsonData.id,
    status = jsonData.status,
    scores = jsonData.data;

console.log('UNIT4: id, status, data: scores = ', id, status, scores);

// 5. function's default values
var user = {
  name: 'Martin',
  age: 18,
  scores: {
    maths: 99,
    english: 100
  }
};

user.scores = function (_ref5) {
  var _ref5$maths = _ref5.maths,
      maths = _ref5$maths === undefined ? 100 : _ref5$maths,
      _ref5$english = _ref5.english,
      english = _ref5$english === undefined ? 100 : _ref5$english;
};

console.log(user);

// 6. iterate map
var map = new Map();
map.set('maths', 99);
map.set('chinese', 86);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        k = _step$value[0],
        v = _step$value[1];

    console.log('UNIT6 k, v = ', k, v);
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