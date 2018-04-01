'use strict';
const censoredWords = ['sad', 'bad', 'mad'];
const customCensorWords = [];
const censor = (inStr) => {
	censoredWords.forEach((it) => {
		inStr = inStr.replace(it, '****');
	});
	customCensorWords.forEach((it) => {
		inStr = inStr.replace(it, '****');
	});
	return inStr;
};
const addCensoredWord = (word) => {
	customCensorWords.push(word);
};
const getCesoredWords = () => {
	return censoredWords.concat(customCensorWords);
};
exports.censor =  censor;
exports.addCensoredWord = addCensoredWord;
exports.getCesoredWords = getCesoredWords;
