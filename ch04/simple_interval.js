'use strict';
let x = 0, y = 0, z = 0;
const displayValues = () => {
	console.log('X=%d; Y=%d; Z=%d', x, y, z);
};
const updateX = () => {
	x += 1;
};
const updateY = () => {
	y += 1;
};
const updateZ = () => {
	z += 1;
	displayValues();
};
setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);