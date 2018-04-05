"use strict";

/**
 * LeetCode Question ID: 126
 * 
 * Given two words (beginWord and endWord), and a dictionary's word list, find 
 * all shortest transformation sequence(s) from beginWord to endWord, such that:
 * - Only one letter can be changed at a time
 * Each transformed word must exist in the word list. Note that beginWord is 
 * not a transformed word.
 * 
 * For example,
 *
 * Given:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * Return
 *   [
 *     ["hit","hot","dot","dog","cog"],
 *     ["hit","hot","lot","log","cog"]
 *   ]
 * 
 * Note:
 * - Return an empty list if there is no such transformation sequence.
 * - All words have the same length.
 * - All words contain only lowercase alphabetic characters.
 * - You may assume no duplicates in the word list.
 * - You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * @author: martinwangjun@163.com
 * @see: https://leetcode.com/problems/word-ladder-ii/description/
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

var beginWord = "hit";
var endWord = "cog";
var wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

var findLadders = function findLadders(beginWord, endWord, wordList) {
  var resultArr = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = wordList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
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
};