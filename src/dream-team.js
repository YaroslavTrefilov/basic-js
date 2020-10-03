const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];
  for (let member of members) {
    if (typeof member === 'string') {
      const membersItem = member.trim().toUpperCase();
      result.push(membersItem[0]);
    }
  }
  return result.sort().join('');
};