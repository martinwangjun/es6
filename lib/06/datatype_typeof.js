'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var symbolA = Symbol('symbol');
var symbolB = Symbol('symbol');

console.log(typeof symbolA === 'undefined' ? 'undefined' : _typeof(symbolA));
console.log(typeof symbolB === 'undefined' ? 'undefined' : _typeof(symbolB));
console.log(symbolA === symbolB);

var a1 = 1;
var a2 = '1';
console.log();