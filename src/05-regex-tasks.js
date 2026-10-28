/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions            *
 *                                                                                           *
 * You can use the next web site in order to check and build regexps:                        *
 * https://regexr.com                                                                        *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the regexp that matches a GUID string representation
 * '{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}',
 */
function getRegexForGuid() {
  return /^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$/;
}

/**
 * Returns the regexp that matches all the strings from first column
 * but of them from the second
 */
function getRegexForPitSpot() {
  // Регулярное выражение длиной 3 символа.
  // Ищет 'p', затем любой 1 символ, затем 't'.
  // Подходит: pit, spot, spate, slap two, respite.
  // Не подходит: ' pt', 'Pot', 'peat', 'part'.
  return /p.t/;
}

/**
 * Returns the password validator regex.
 */
function getPasswordValidator(minLength) {
  // (?=.*[a-z]) - есть строчная
  // (?=.*[A-Z]) - есть заглавная
  // (?=.*\d) - есть цифра
  // (?!.*__) - нет двух подчеркиваний подряд
  // [a-zA-Z0-9_]{minLength,} - разрешенные символы и длина
  return new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*__)[a-zA-Z0-9_]{${minLength},}$`);
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
