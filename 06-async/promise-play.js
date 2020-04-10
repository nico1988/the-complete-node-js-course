const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let flag = Math.random()*10;
        if (flag < 5) {
            resolve(1);
        } else {
            reject(new Error('message'));
        }
    },1000)
});
p.then(success).catch(error);
function success(res) {
    console.log('res:::', res);
}
function error(err) {
    console.log('err:::', err);
}
