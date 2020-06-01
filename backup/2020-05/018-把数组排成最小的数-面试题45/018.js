/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    if (a + "" + b < b + "" + a) return -1;
    else if (a + "" + b > b + "" + a) return 1;
    else return 0;
  });
  return nums.join("");
};
