/**
 *
 * 先二分查找，找到出现的目标值的下标
 *
 * 1、找到目标值后，向前向后遍历，找到所有的值
 */

function solution(array, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
    return solution(array, target, start, mid - 1);
  } else {
    return solution(array, target, mid + 1, end);
  }
}

function find(array, target, start, end) {
  let count = 1;
  let mid = solution(array, target, start, end); //目标值出现的位置
  if (mid === -1) {
    return --count;
  } else {
    for (let i = mid - 1; i >= 0; i--) {
      //向前遍历
      if (target === array[i]) {
        count++;
      } else {
        break;
      }
    }
    for (let i = mid + 1; i <= end; i++) {
      //向后遍历
      if (target === array[i]) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

let arr = [1, 1, 1, 2, 3, 4, 4, 4, 4, 4];
console.log(find(arr, 4, 0, arr.length - 1));

/**
 *
 * 2、找到目标值后
 * 找第一个目标值：判断和目标值前一个是否相等，相等则继续找；不相等，则证明是第一个目标值
 * 找最后一个目标值：判断和目标值后一个是否相等，相等则继续找；不相等，则证明是最后一个目标值
 */

function find2(array, target, start, end) {
  let first = firstKey(array, target, start, end);
  let last = lastKey(array, target, start, end);
  if (first !== -1 && last !== -1) {
    return last - first + 1;
  }
  return 0;
}

function firstKey(array, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === array[mid]) {
    if (target !== array[mid - 1]) {
      return mid;
    } else {
      return firstKey(array, target, start, mid - 1);
    }
  } else if (target < array[mid]) {
    return firstKey(array, target, start, mid - 1);
  } else {
    return firstKey(array, target, mid + 1, end);
  }
}

function lastKey(array, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === array[mid]) {
    if (target !== array[mid + 1]) {
      return mid;
    } else {
      return lastKey(array, target, mid + 1, end);
    }
  } else if (target < array[mid]) {
    return lastKey(array, target, start, mid - 1);
  } else {
    return lastKey(array, target, mid + 1, end);
  }
}

console.log(find2(arr, 4, 0, arr.length - 1));
