/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  function bitSum(n) {
    let result = 0;
    while (n) {
      result = result + (n % 10);
      n = Math.floor(n / 10);
    }
    return result;
  }
  let directions = [
    // [-1, 0], // 上
    [0, 1], // 右
    [1, 0], // 下
    // [0, -1], // 左
  ];
  //已经走过得坐标
  let set = new Set(["0-0"]);
  let queue = [[0, 0]];
  while (queue.length) {
    let coordinate = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      let x = coordinate[0] + directions[i][0];
      let y = coordinate[1] + directions[i][1];
      if (
        x >= 0 &&
        y >= 0 &&
        x < m &&
        y < n &&
        bitSum(x) + bitSum(y) < k &&
        !set.has(`${x}-${y}`)
      ) {
        set.add(`${x}-${y}`);
        queue.push([x, y]);
      }
    }
  }
  return set.size;
};

console.log(movingCount(3, 2, 17));
