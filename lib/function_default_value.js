'use strict';

// 函数的默认值

function log(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';

  console.log(x, y);
}