/**
 * Checks if a given string is a valid email address.
 * A valid email address should contain at least one '@' character, and at least one '.' character.
 * @param {string} e - the string to be checked.
 * @returns {boolean} true if the string is a valid email address, false otherwise.
 */
// 
export const validEmail = (e) => /\S+@\S+\.\S+/.test(e);

/**
 * This constant is used to check the given password rules.
 */
export const passwordRules = {
  length: (pwd) => pwd.length >= 8 && pwd.length <= 16,
  lowercase: (pwd) => /[a-z]/.test(pwd),
  uppercase: (pwd) => /[A-Z]/.test(pwd),
  number: (pwd) => /\d/.test(pwd),
  symbol: (pwd) => /[^A-Za-z0-9]/.test(pwd),
};
