const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  let result = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string' && members[i][0] !== ' ') {
      result.push(members[i][0]);
    }
  };
  if (result === []) {
    return false
  };
  result = result.sort().join('');

  return result.toUpperCase();
};