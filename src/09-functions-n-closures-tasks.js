/* *********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                                *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions                     *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures                            *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * Returns the functions composition of two specified functions f(x) and g(x).
 * The result of compose is to be a function of one argument, (lets call the argument x),
 * which works like applying function f to the result of applying function g to x, i.e.
 *  getComposition(f,g)(x) = f(g(x))
 */
function getComposition(f, g) {
  return (x) => f(g(x));
}

/**
 * Returns the math power function with the specified exponent
 */
function getPowerFunction(exponent) {
  return (x) => x ** exponent;
}

/**
 * Returns the polynom function of one argument based on specified coefficients.
 */
function getPolynom(...coefficients) {
  if (coefficients.length === 0) return null;
  return (x) => {
    let result = 0;
    for (let i = 0; i < coefficients.length; i += 1) {
      result += coefficients[i] * x ** (coefficients.length - 1 - i);
    }
    return result;
  };
}

/**
 * Memoizes passed function and returns function
 * which invoked first time calls the passed function and then always returns cached result.
 */
function memoize(func) {
  let cached = null;
  let called = false;
  return () => {
    if (!called) {
      cached = func();
      called = true;
    }
    return cached;
  };
}

/**
 * Returns the function trying to call the passed function and if it throws,
 * retrying it specified number of attempts.
 */
function retry(func, attempts) {
  return () => {
    let lastError;
    for (let i = 0; i < attempts; i += 1) {
      try {
        return func();
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError;
  };
}

/**
 * Returns the logging wrapper for the specified method,
 * Logger has to log the start and end of calling the specified function.
 * Logger has to log the arguments of invoked function.
 */
function logger(func, logFunc) {
  return (...args) => {
    // Форматируем аргументы как JSON массив для соответствия тестам
    const argsStr = args.map((arg) => JSON.stringify(arg)).join(',');
    const name = func.name || 'anonymous';
    logFunc(`${name}(${argsStr}) starts`);
    const result = func(...args);
    logFunc(`${name}(${argsStr}) ends`);
    return result;
  };
}

/**
 * Return the function with partial applied arguments
 */
function partialUsingArguments(fn, ...args1) {
  return (...args2) => fn(...args1, ...args2);
}

/**
 * Returns the id generator function that returns next integer starting
 * from specified number every time when invoking.
 */
function getIdGeneratorFunction(startFrom) {
  let current = startFrom;
  return () => {
    const res = current;
    current += 1;
    return res;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
