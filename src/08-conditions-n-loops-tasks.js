/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.left + rect2.width
    && rect1.left + rect1.width > rect2.left
    && rect1.top < rect2.top + rect2.height
    && rect1.top + rect1.height > rect2.top
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function findFirstSingleChar(str) {
  const count = str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const chars = str.split('');
  const result = chars.find((char) => count[char] === 1);
  return result === undefined ? null : result;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const left = isStartIncluded ? '[' : '(';
  const right = isEndIncluded ? ']' : ')';
  return `${left}${start}, ${end}${right}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return parseInt(reverseString(String(num)), 10);
}

function isCreditCardNumber(ccn) {
  const str = String(ccn);
  let sum = 0;
  let double = false;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    let digit = parseInt(str[i], 10);
    if (double) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    double = !double;
  }
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let current = num;
  while (current > 9) {
    current = String(current)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return current;
}

function isBracketsBalanced(str) {
  const pairs = {
    ')': '(', ']': '[', '}': '{', '>': '<',
  };
  const chars = str.split('');
  let isValid = true;
  const stack = [];

  chars.forEach((char) => {
    if (!isValid) return;
    if ('([{<'.includes(char)) {
      stack.push(char);
    } else if (')]}>'.includes(char)) {
      if (stack.pop() !== pairs[char]) {
        isValid = false;
      }
    }
  });

  return stack.length === 0 && isValid;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  if (!pathes.length) return '';
  const splitPaths = pathes.map((p) => p.split('/'));
  const first = splitPaths[0];

  const commonLength = first.reduce((len, part, i) => {
    if (len === i && splitPaths.every((path) => path[i] === part)) {
      return len + 1;
    }
    return len;
  }, 0);

  if (commonLength === 0) return '';
  const result = first.slice(0, commonLength).join('/');
  return result === '' ? '/' : `${result}/`;
}

function getMatrixProduct(m1, m2) {
  const rows = m1.length;
  const cols = m2[0].length;
  const common = m2.length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      for (let k = 0; k < common; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [];
  for (let i = 0; i < 3; i += 1) {
    lines.push([position[i][0], position[i][1], position[i][2]]);
    lines.push([position[0][i], position[1][i], position[2][i]]);
  }
  lines.push([position[0][0], position[1][1], position[2][2]]);
  lines.push([position[0][2], position[1][1], position[2][0]]);

  const winner = lines.find((line) => line[0] && line[0] === line[1] && line[1] === line[2]);
  return winner ? winner[0] : undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
