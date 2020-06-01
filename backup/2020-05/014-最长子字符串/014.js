/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let move = "";
  let res = 0;
  for (let char of s) {
    if (move.indexOf(char) == -1) {
      move += char;
      res = res < move.length ? move.length : res;
    } else {
      move += char;
      //找到了相同的字符串，最少也要删除一个字符，所以不用再计算最长长度
      move = move.slice(move.indexOf(char) + 1);
    }
  }
  return res;
};
