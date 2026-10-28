/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => i * 2 + 1);
}

function doubleArray(arr) {
  return [...arr, ...arr];
}

function getArrayOfPositives(arr) {
  return arr.filter((x) => x > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((x) => typeof x === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
  return arr.map((s) => s.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((s) => s.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
  return arr.map((x) => x * x);
}

function getMovingSum(arr) {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
}

function getSecondItems(arr) {
  return arr.filter((_, i) => i % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

function get3TopItems(arr) {
  return [...arr].sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.filter((x) => typeof x === 'number' && x > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const digitNames = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr.sort((a, b) => digitNames.indexOf(a) - digitNames.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((sum, x) => sum + x, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((x) => !x).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter((x) => x === item).length;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) => {
    const row = Array(n).fill(0);
    row[i] = 1;
    return row;
  });
}

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
    return map;
  }, new Map());
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  return indexes.reduce((acc, idx) => acc[idx], arr);
}

function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [...arr.slice(mid), ...arr.slice(0, mid)];
  }
  return [...arr.slice(mid + 1), arr[mid], ...arr.slice(0, mid)];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
