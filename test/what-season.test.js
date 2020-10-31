const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    date.getUTCHours();
  } catch (exception) {
    throw new Error(exception);
  };
  const currentMonth = date.getMonth();
  if ((currentMonth === 11) || (currentMonth >= 0 && currentMonth <= 1)) return 'winter';
  if (currentMonth >= 2 && currentMonth <= 4) return 'spring';
  if (currentMonth >= 5 && currentMonth <= 7) return 'summer';
  if (currentMonth >= 8 && currentMonth <= 10) return 'fall';
};