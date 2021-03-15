const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length == 0 || !Array.isArray(members)) { return false;}

  return members.filter((item) => typeof item == "string")
    .map((item) => item.trim().charAt(0))
    .sort((a, b) => a.localeCompare(b))
    .join('')
    .toUpperCase();
	 
};
