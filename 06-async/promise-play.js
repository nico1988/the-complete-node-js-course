const p = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let flag = Math.random()*10;
            if (flag < 5) {
                resolve(1);
            } else {
                reject(new Error('message'));
            }
        },1000)
    });
};
p()
    .then(success)
    .catch(error)
    .then(res => {
        console.log('res:::', res);
    });
function success(res) {
    console.log('res:::', res);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('reading from db：：：');
            resolve({id: 1, gitHubName: 'nico1988'});
        })
    });
}
function error(err) {
    console.log('err:::', err);
}
