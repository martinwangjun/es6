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

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];

let findLadders = function(beginWord, endWord, wordList) {
  let resultArr = [];
  for(let word of wordList){
    
  }
};



