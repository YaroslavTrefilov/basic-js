const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArr = matrix.flat();
  let result = 0;

  newArr.map(function(el){
    if (el === '^^') {
      result += 1;
    }
  });

  return result;
};
