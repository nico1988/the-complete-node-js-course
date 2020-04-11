console.log('before');
setTimeout(function () {
    console.log('1000ms later');
}, 1000);
new Promise(function (resolve, reject) {
    console.log('normal 1');
    setTimeout(function () {
        console.log('promise setTimeout 0 ms later');
        resolve('promise resolve');
    }, 0);
    setTimeout(function () {
        console.log('promise setTimeout 1000 ms later');
        resolve('promise resolve');
    }, 0);
    console.log('normal 2');
});
process.nextTick(function () {
    console.log('process.nextTick');
});
console.log('after');
