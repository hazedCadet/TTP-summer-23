/* STEP 1 --


    fileB.js :
        module.exports.foo = 'hello world';
        module.exports.bar = 'goodbye world';

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
    fileB.js:
        let number = 5;

        module.exports = () => {
            console.log(number);
        };

const exportsFromFileB = require('./fileB');
exportsFromFileB();
*/

// STEP 3
/*

    fileB.js:
        console.log('fileB is being run!');

require('./fileB');
require('./fileB'); // not a typo - actually require it twice!
*/

// BONUS - 1
/* 
    fileC.js:
        const dogs = 'I love dogs!';
        const cats = 'I love cats!';

        module.exports.dogs = dogs;
        module.exports.cats = cats;

require('./fileC');
require('./fileC');
this method was used for function execution actually...
*/
/*
const pets = require('./fileC'); // loading value in var, thats why only one require needed!

console.log(pets); // should show full dictionary!
*/

// BONUS - 2
/*
    // fileD.js:
    // const dogs = 'I love dogs!';
    // const cats = 'I love cats!';
    
    // module.exports = {
    //   dogs: dogs,
    //   cats: cats,
    // };
    // this is considered poor practice, do not use

const pets = require('./fileD');
console.log(pets);
*/

// BONUS - 3

    // fileE.js:
    //     const dogs = 'I love dogs!';
    //     const cats = 'I love cats!';
        
    //     module.exports = dogs;
    //     module.exports = cats;
// seems to replacing not appending...
// correct

const pets = require('./fileE');
console.log(pets);

