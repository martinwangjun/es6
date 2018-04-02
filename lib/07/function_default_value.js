'use strict';

function test() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';

  console.log('Hello ' + x);
}

test();