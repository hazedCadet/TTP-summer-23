/* STEP 1 --
const exportsFromFileB = require('./fileB'); // note the relative file path
console.log(exportsFromFileB);
console.log(`trying to print seperately now...`);
console.log(exportsFromFileB[0]);
console.log(exportsFromFileB[1]);
console.log(`console.log(exportsFromFileB[i]); \n is a total bust...`);
console.log(`ah yes ofc 
    \n it must be:
    \n console.log(exportsFromFileB.KEY);`);
console.log(exportsFromFileB.foo);
console.log(exportsFromFileB.bar);

exportsFromFileB();
*/
// step 2
/*
const exportsFromFileB = require('./fileB');
exportsFromFileB();
*/

// STEP 3

require('./fileB');
require('./fileB'); // not a typo - actually require it twice!