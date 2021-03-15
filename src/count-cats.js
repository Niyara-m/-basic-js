const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	const massiv = matrix.reduce((item, amount) => {
		return item.concat(amount);
	}, []);

	if (!massiv || massiv.length  == 0 || !massiv.includes('^^')) { return 0;}

	let allcount = massiv.reduce((cat, total) => {
		cat[total] = (cat[total] || 0) + 1;
		return cat;
	}, {})

	return allcount['^^'];
};
