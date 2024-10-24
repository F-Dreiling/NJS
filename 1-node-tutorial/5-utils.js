const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

const sayWhat = function (name) {
    console.log('Heyo ' + name);
}

module.exports = { sayHi, sayWhat };
// or export each function separately
// module.exports.sayHi = sayHi;
// module.exports.sayWhat = sayWhat;