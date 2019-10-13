module.exports = function multiply(first, second) {
  let multiply = BigInt(first) * BigInt(second);
  return String(multiply);
}
