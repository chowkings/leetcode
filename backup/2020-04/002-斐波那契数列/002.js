/**
 * 0,1,1,2,3,5,8,13,21...
 *
 * 递归会存在重叠的情况，重复计算比较多
 */

function solution(n) {
  if (n < 2) {
    return n;
  }
  return solution(n - 1) + solution(n - 2);
}

console.log(solution(8));

/**
 *
 * 动态规划
 *
 * 将下一个值赋给当前值，将下一个值和当前值得和赋给下下个值，不断累加
 */
function fibonacci(n) {
  let i = 0;
  let current = 0;
  let next = 1;
  while (i++ < n) {
    [current, next] = [next, next + current];
  }
  return current;
}

console.log(fibonacci(8));
