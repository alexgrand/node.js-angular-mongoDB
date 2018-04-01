'use strict';
let censor = require('censorify-alexgrandlex');
console.log(censor.getCesoredWords());
console.log(censor.censor('Some very sad, bad and mad text.'));
censor.addCensoredWord('gloomy');
console.log(censor.getCesoredWords());
console.log(censor.censor('A very gloomy day.'));
