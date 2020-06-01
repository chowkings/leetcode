/**
 *
 * 以左下角坐标为基准
 * 目标值小于坐标值，y-1
 * 目标值大于坐标值，x+1
 */

function find(array, target) {
  let y = array.length - 1;
  let x = 0;
  return compare(array, target, y, x);
}

function compare(array, target, y, x) {
  if (array[y] === undefined || array[y][x] === undefined) {
    return false;
  }
  let temp = array[y][x];
  if (target === temp) {
    return array[y][x];
  } else if (target < temp) {
    return compare(array, target, --y, x);
  } else if (target > temp) {
    return compare(array, target, y, ++x);
  }
}

console.log(
  find(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    6
  )
);

/**
 * 更优解法：二分查找，二分查找必须有序
 */

function find2(array, target) {
  let y = array.length - 1;
  let x = 0;
  while (
    array[y] !== undefined &&
    array[y][x] !== undefined &&
    target !== array[y][x]
  ) {
    if (target < array[y][x]) {
      y--;
    } else {
      return binary(array[y], target, 0, array[y].length - 1);
    }
  }
  if (target === array[y][x]) return array[y][x];
  return false;
}

function binary(array, target, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === array[mid]) {
    //先判断中位值
    return array[mid];
  } else if (target < array[mid]) {
    //如果目标值比中位值还小，就只在小的那一半表里再进行二分查找
    return binary(array, target, start, mid - 1);
  } else {
    //如果目标值比中位值大，就只在大的那一半表里再进行二分查找
    return binary(array, target, mid + 1, end);
  }
}

console.log(
  find2(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    6
  )
);
